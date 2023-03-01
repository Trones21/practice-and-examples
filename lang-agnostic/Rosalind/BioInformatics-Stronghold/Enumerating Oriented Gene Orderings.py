from itertools import permutations, product

def plusAndMinusPermutations(items):
    for p in permutations(items):
        for signs in product([-1,1], repeat=len(items)):
            yield [a*sign for a,sign in zip(p,signs)]


items = [1, 2, 3, 4]
signedPerms = list(plusAndMinusPermutations(items))

savePath = 'C:\\Users\\trone\\Documents\\'
answer = open(savePath + "answer.txt", 'w')
answer.write(str(len(signedPerms)))
for perm in signedPerms:
    answer.write('\n' + str(perm).replace("[", '').replace(",", '').replace("]", ''))

answer.close


