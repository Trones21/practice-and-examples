import perfcounters
import random

def main():

    chars = ["A", "T", "C", "G"]

    TenMil = random.choices(chars, k=10000000)
    HundredK = random.choices(chars, k=10**5)
    #actual Test
    perfCheck('HundredK', lambda: SimpleElif(HundredK))
    perfCheck('TenMil', lambda: SimpleElif(TenMil))

def perfCheck(counterName, myFunc):
    counters = perfcounters.PerfCounters()
    counters.start(counterName)
    myFunc()
    counters.stop(counterName)
    counters.report()


def SimpleElif(sequence):
    SeqArr = list(sequence)
    baseCounts = {
        "A": 0,
        "T": 0,
        "C": 0,
        "G": 0,
        "Error": 0
    }
    for base in SeqArr:
        if base == "A":
            baseCounts["A"] += 1
        elif base == "T":
            baseCounts["T"] += 1
        elif base == "C":
            baseCounts["C"] += 1
        elif base == "G":
            baseCounts["G"] += 1
        else:
            baseCounts["Error"] += 1

    print(baseCounts)
main()
