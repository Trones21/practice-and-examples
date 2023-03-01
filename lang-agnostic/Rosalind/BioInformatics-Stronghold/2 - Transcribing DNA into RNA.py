savePath = 'C:\\Users\\trone\\Documents\\'
with open('C:\\Users\\trone\\Downloads\\rosalind_rna (2).txt', 'r') as f:
    output = f.read()
    replaced = output.replace('T','U')
    answer = open(savePath + "answer.txt", 'w')
    answer.write(replaced)
    answer.close