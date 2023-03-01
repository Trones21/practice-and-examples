#http://rosalind.info/problems/need/
#Run needle and/or stretcher

#installed on WSL, play around with this later
#List of EMBOSS guis - http://emboss.sourceforge.net/interfaces/

#Note Galaxy doesn't offer end gap penalty options, so it won't return the expected values.

# This just generates the command line expression to run 
# from Bio.Emboss.Applications import NeedleCommandline

# #For mEMBOSS (Windows) we need to wrap the a and b sequence in quotes
# needle_cline = NeedleCommandline(asequence="'alpha.faa'", bsequence="'beta.faa'",
#                            gapopen=10, gapextend=1, outfile="needle.txt")

# print(needle_cline)

#Rosalind Example
import os
from Bio import Entrez
from Bio import SeqIO

Entrez.email = "trones14@gmail.com"
handle = Entrez.efetch(db="nucleotide",id=['JX205496.1', 'JX469991.1'], rettype='fasta')
records = list(SeqIO.parse(handle,"fasta"))
for r in range(2):
    f = open(os.path.dirname(os.path.realpath(__file__)) +  "\seq" + str(r)  + ".faa", "w")
    f.write(str(records[r].seq)) 
    f.close()

