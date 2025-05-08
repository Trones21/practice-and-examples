package main

import (
	"fmt"
	"runtime"
)

func main() {
	n := 1_000_000
	m := make(map[int]*[128]byte)
	printHeapSizeMB()

	for i := 0; i < n; i++ {
		m[i] = randBytes()
	}
	printHeapSizeMB()

	for i := 0; i < n; i++ {
		delete(m, i)
	}
	runtime.GC()
	printHeapSizeMB()
	runtime.KeepAlive(m)
}

func randBytes() *[128]byte {
	return &[128]byte{}
}

func printHeapSizeMB() {
	var m runtime.MemStats
	runtime.ReadMemStats(&m)

	fmt.Printf("HeapAlloc = %.2f MB\n", float64(m.HeapAlloc)/1024/1024)
	fmt.Printf("HeapSys   = %.2f MB\n", float64(m.HeapSys)/1024/1024)
}
