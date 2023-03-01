sequence = "AGGCAGCCCGTAGGCAATACATTAACAGGGGTGCACCTAACCATATAGATCACACTATGCGAAAAGAAAGAGCGCGGTCGTCGATC"
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


