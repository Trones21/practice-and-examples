def countPointMutations(Str1, Str2):
    charList1 = list(Str1)
    charList2 = list(Str2)
    if len(charList1) != len(charList2):
        print("Non Equal Length")
        return 0
    else:
        hammingDistance = 0
        for i in range(0, len(charList1)-1, 1):
            if charList1[i] != charList2[i]:
                hammingDistance += 1
        return hammingDistance
                

savePath = 'C:\\Users\\trone\\Documents\\'
with open('C:\\Users\\trone\\Downloads\\rosalind_hamm.txt', 'r') as f:
    str1 = f.readline()
    str2 = f.readline()

    print(countPointMutations(str1, str2))
