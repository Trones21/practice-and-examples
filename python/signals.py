# sig_demo.py
import os, signal, time
def on_usr1(signum, frame):
    print(f"got SIGUSR1 in pid={os.getpid()}")
signal.signal(signal.SIGUSR1, on_usr1)

print("pid:", os.getpid())
time.sleep(30)
