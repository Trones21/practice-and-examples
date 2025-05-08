import os
import psutil
import gc


def print_mem_mb():
    process = psutil.Process(os.getpid())
    print(f"RSS = {process.memory_info().rss / 1024 / 1024:.2f} MB")


print("Start:")
print_mem_mb()

# Step 1: Allocate big dict
d = {i: bytearray(128) for i in range(1_000_000)}
print("After adding 1M elements:")
print_mem_mb()

# Step 2: Delete all items
d.clear()
gc.collect()
print("After clearing and GC:")
print_mem_mb()
