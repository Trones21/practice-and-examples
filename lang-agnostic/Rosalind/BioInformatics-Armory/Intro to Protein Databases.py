# http://rosalind.info/problems/dbpr/
#There is an issue with Rosalind, i am unable to download the dataset.
#Additionally, I can't seem to find the gene ontology info

from Bio import ExPASy
from Bio import SwissProt
handle = ExPASy.get_sprot_raw('Q5SLP9')
record = SwissProt.read(handle)

#print(dir(record))
if 'cross_references' in dir(record):
    print(record.cross_references[0])
    

