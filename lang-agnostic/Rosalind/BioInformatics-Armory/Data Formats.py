from Bio import Entrez
from Bio import SeqIO
Entrez.email = "trones14@gmail.com"
handle = Entrez.efetch(db="nucleotide", id=["JX308821,NM_001131214,JX491654,JX460804,BT149870,JQ796071,NM_001133698,NR_073358"], rettype="fasta")
records = list(SeqIO.parse(handle,"fasta"))
shortestRecordLength = len(records[0])
for record in records:
    if len(record) < shortestRecordLength:
        shortestRecordLength = len(record)
        shortestRecord = record
        #print(shortestRecordLength)
        #print(shortestRecord.format("fasta"))



print(shortestRecord.format("fasta"))