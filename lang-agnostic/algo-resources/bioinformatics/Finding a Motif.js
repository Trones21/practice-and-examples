var dnaStr = "AGCCTCCCCCGGTCCTCCCCCAAAACACCTCCCCCCTCCCCATCCTAACCCTCCCCGCCTCCCCGCCCTCCCCCCTCCCCGTATGGATGCCTCCCCCGACCTCCCCCCTCCCCGTTTGCCTCCCCCTACTTACCTCCCCGCCCTCCCCTTGGCGCCTCCCCTAAATTCCTCCCCCCTCCCCAGCCTCCCCACCTCCCCATCCCCTCCCCACCTCCCCTCCTCCCCAACCTCCCCATGTTGCGTCCCTCCCCAGCCTCCCCCCCCTCCCCCCTCCCCCGCTATTGGCCCTCCCCCTGGGCGCCGAGGGCCTCCCCTCCTCCCCAGATACCTCCCCCCTCCCCGCCTCCCCCCTCCCCCTGCCTCCCCCCTCCCCCTGCCTCCCCTTAGCTCCTCCCCTACCCTCCCCACATCCTCCCCCCTCCCCGACCTCCCCTCCTCCCCACCTCCCCCCTCCCCCCCTCCCCCCTCCCCTACCTCCCCTCCTCCCCGCCTCCCCACCTCCCCGCCTCCCCCGGCCTCCCCCGATCCTCCCCACCTTCCTCCCCCCTCAAGGTCCTCCCCTCCCTCCCCCCTCCCCGGTTGGGCCTCCCCGCCTCCCCGGGCCTCCCCTCCTCCCCCCTCCCCCTCCTCCCCTCACCCTCCCCACCTCCCCCCTCCCCCCTCCCCACCTCCCCTATAAAGCCTCCCCACTACCTCCCCACCCTCCCCTCCTCCCCACCTCCCCACCTCCCCGGGCTCCCTCCCCGCCTCCCCCCCTCCCCCCTCCCCACCCCCTCCCCCGCCCTCCCCCCTCCCCGCCTCCCCCCTCCCCTGTCCTCCCCCCTCCCCGGCCTCCCCATCCTCCCCCCCCTCCCCCTCAACCTCCCCTCTTGTTTACTCGGCCACCTCCCCAGCAGCCCGTCCTCCCCGCCTCCCCGTACCTCCCCTCCTCCCCAACCCCTCCCCCCTCCCCGAAGGAATACCCTCCCCCGCCTCCCCCCTCCCCT";
var re = /C(?=CTCCCCCC)/g,
    str = dnaStr;

let answer = ""
while ((match = re.exec(str)) != null) {
    (answer += " " + (match.index + 1));
}

console.log(answer)