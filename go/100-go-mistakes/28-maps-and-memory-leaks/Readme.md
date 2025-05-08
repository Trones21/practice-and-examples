## Maps and Memory Leaks

```text
Start:
HeapAlloc = 0.18 MB
HeapSys   = 3.72 MB

After adding 1M elements
HeapAlloc = 479.40 MB
HeapSys   = 607.50 MB

After removing those 1M elements
HeapAlloc = 293.50 MB
HeapSys   = 607.47 MB
```

You might think the heap should be empty after removing all 1M elements, but its not.

A Go map is a pointer to a runtime.hmap struct

```Go
type hmap struct {
    count     int // number of live cells == size of map.  must be first (used by len() builtin)
    flags     uint8
    B         uint8  // log_2 of # of buckets (can hold up to loadFactor*2^B items)
    noverflow uint16 // approximate number of overflow buckets; see incrnoverflow for details
    hash0     uint32 // hash seed
    buckets    unsafe.Pointer // array of 2^B Buckets. may be nil if count==0.
    oldbuckets unsafe.Pointer // previous bucket array of half the size, non-nil only when growing
    nevacuate  uintptr        // progress counter for evacuation (buckets less than nevacuate are evacuated and cleared)
    overflow   *[2]*bmap      // approximately 2^B overflow buckets, to keep search costs low (see runtime/map.go)
    oldoverflow *[2]*bmap      // previous generation of overflow buckets; not part of hmap! (see runtime/map.go)
    // next gcController work cycle
    extra *mapextra // optional fields
}
```

The key is here: `B uint8  // log_2 of # of buckets (can hold up to loadFactor*2^B items)`

The number of buckets in a map cannot shrink, so removing the items doesnt remove buckets, it just zeroes the slots in the buckets.

---

## Options For Optimizing Memory

### 1. Rebuild the map

```go
newMap := make(map[int]*[128]byte, len(oldMap))
for k, v := range oldMap {
    if stillRelevant(k, v) {
        newMap[k] = v
    }
}
oldMap = newMap
```

### 2. Store pointers:

```go
map[int]*[128]byte
```

## 📉 Why Changing `map[int][128]byte]` ➡️ `map[int]*[128]byte` Helps

This changes the layout dramatically:

| Key   | Value Type   | Total Size in Map Entry       |
| ----- | ------------ | ----------------------------- |
| `int` | `[128]byte`  | 128 bytes (value **inlined**) |
| `int` | `*[128]byte` | 8 bytes (pointer only)        |

So with pointers:

- The **map holds only pointers**.
- The actual `[128]byte` values live on the heap independently.
- When you delete entries, the pointers are GC'd, and the backing memory can be freed.

Plus, pointer-based values mean:

- Less memory is stuck in oversized buckets.
- More flexibility for reuse and GC optimization.

### 3. (Optional) Trigger a GC + return memory to OS:

```go
runtime.GC()
debug.FreeOSMemory()
```

Yes — that’s **correct**, and it’s a subtle but important performance detail.

---

## 🔍 How Go stores map keys and values internally

When you insert a key-value pair into a Go map, the runtime decides **whether to store the actual key/value in the bucket directly** or to store a **pointer** to it.

### 📏 Rule of Thumb:

> If the **key or value is larger than 128 bytes**, Go **stores a pointer** instead of embedding the value directly in the bucket.

---

## 🧠 Why?

### ✅ Efficiency tradeoff:

- Small keys/values (≤128 bytes): inline in the bucket

  - ✅ Fast access
  - ✅ Less indirection
  - ❌ Larger buckets → more memory

- Large keys/values (>128 bytes): store via pointer

  - ✅ Keeps bucket size small
  - ❌ Adds one level of indirection
  - ✅ Helps avoid bloating the map's memory usage

This applies separately to keys and values. So if **either one** exceeds the 128-byte threshold, it’ll get stored as a pointer.

---

## 🧪 In our case: `[128]byte`

- It's exactly 128 bytes → will be **inlined**.
- If we went to `[129]byte`, Go would switch to **storing a pointer**.

That’s likely why the second test (`map[int]*[128]byte`) showed significantly lower `HeapAlloc` — because we're controlling where the large data lives.
