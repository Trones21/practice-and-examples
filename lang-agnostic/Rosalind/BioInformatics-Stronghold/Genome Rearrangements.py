#http://rosalind.info/problems/perm/
#using pythons standard tools
import itertools

def algorithm():
    n = 7
    OnetoN = list()
    for i in range(1, n+1, 1):
        OnetoN.append(i)

    return list(itertools.permutations(OnetoN, n))
    

savePath = 'C:\\Users\\trone\\Documents\\'
perms = algorithm()
answer = open(savePath + "answer.txt", 'w')

answer.write(str(len(perms)))

for perm in perms:
    answer.write('\n' + str(perm).replace("(", '').replace(",", '').replace(")", ''))

answer.close
