from Bio.Seq import translate

#Confusing sample dataset -- it seems to already have the protein seq?
savePath = 'C:\\Users\\trone\\Documents\\'
with open('C:\\Users\\trone\\Downloads\\rosalind_ptra.txt', 'r') as f:
    coding_dna = f.read()
    prot = translate(coding_dna, to_stop=False)
    f.close()    
    answer = open(savePath + "answer.txt", 'w')
    answer.write(prot)
    answer.close
