# http://rosalind.info/problems/gbk/
from Bio import Entrez
Entrez.email = "trones14@gmail.com"
handle = Entrez.esearch(db="nucleotide",term='"Lynx"[Organism] AND  ("2001/01/05"[Publication Date] : "2012/09/18"[Publication Date]) ')
record = Entrez.read(handle)
print(record["IdList"])

