#!/usr/bin/env python3
import os
import time
import re

ROLLUP_FIELDS = [
    "Rss",
    "Pss",
    "Shared_Clean",
    "Shared_Dirty",
    "Private_Clean",
    "Private_Dirty",
    "AnonHugePages",
]


def read_rollup(pid):
    out = {k: 0 for k in ROLLUP_FIELDS}
    try:
        with open(f"/proc/{pid}/smaps_rollup") as f:
            for line in f:
                m = re.match(r"^(\w+(?:_\w+)*)\:\s+(\d+)\s+kB$", line)
                if m and m.group(1) in out:
                    out[m.group(1)] = int(m.group(2))
    except FileNotFoundError:
        return None
    return out


# Allocate ~200 MB and ensure pages are faulted in (touch once)
SIZE = 200 * 1024 * 1024
PAGE = 4096
blob = bytearray(SIZE)
for i in range(0, SIZE, PAGE):
    blob[i] = 0

pid = os.fork()
if pid == 0:
    me = os.getpid()
    print(f"[child] pid={me}, ppid={os.getppid()}")
    time.sleep(2)
    print("[child] writing one byte per page (trigger CoW)")
    for i in range(0, SIZE, PAGE):
        blob[i] = (blob[i] + 1) % 256
    print("[child] done; sleeping")
    time.sleep(2)
else:
    me = os.getpid()
    print(f"[parent] pid={me}, child_pid={pid}")
    for t in range(4):
        time.sleep(1)
        pr = read_rollup(me)
        cr = read_rollup(pid)
        if pr is None or cr is None:
            break

        def fmt(r):  # show key stats in MB
            return (
                "Rss={:.1f} Pss={:.1f} | Priv(C/D)={:.1f}/{:.1f} | "
                "Shared(C/D)={:.1f}/{:.1f}"
            ).format(
                r["Rss"] / 1024,
                r["Pss"] / 1024,
                r["Private_Clean"] / 1024,
                r["Private_Dirty"] / 1024,
                r["Shared_Clean"] / 1024,
                r["Shared_Dirty"] / 1024,
            )

        print(f"[t+{t:02d}s] parent: {fmt(pr)}  ||  child: {fmt(cr)}")
    os.waitpid(pid, 0)
