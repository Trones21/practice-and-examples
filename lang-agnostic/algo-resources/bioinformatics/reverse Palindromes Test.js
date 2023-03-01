let dna = `ATATTCTGCCTCAGGCCTCTTCGGGAGTTCCGATTGGTGCAGGCATCGCGTAGCGGGAAA
GGCACCGGTCTGACGAGGTAATCTATAGAAGTGCCAGCTTACCTGGTTGGCGAGCTGCGA
CCATGACCGATGAGCCAATCATCGTCCATTGAGACTTGCTAGTATGACCCCTAACCCGTT
GACACTATCACTCAACTCATAGTCTTACGTCGCGAGTGGATACACACTCGGAAGCGGTGA
ATTAATAGACGGACCGACCTTTAGATCTACTCTAGCAAGCGGATCTACAAGCTCAGTCTG
GTATAGTCGCTATCGGTGTCTGCCAGCATACGGCACTTTATTCTGTTCCTACTGGATGGA
GCCCACTCAATCGAATTTGGGCCCAAACTAAGTTAACCCATGTTCATGTGAGATAAACGT
TTATCGAGATAAGAGGCTATTTTCACCTACTCACTATTTTCTGTTGCAAGCATAATTCTA
TCTTTCGTCAGACATCCTCCGTTTCTAATGCGATATCCGCGCGGGCGCTCGAGTGCGGCT
GCAGTGCCAGATGTGCTCCGCCCGATCATGACCCACTGGCCTATATACTTTTGGTGATGT
CGCATGTAGACTTCGCGGCATGAGTGGGAACCCGACCATCCGCCGGCCGTCTACCTAGCG
ACCCGACTAATGATGATATGAAGGTGCCCTCTGCCTATACGTGCAAGTCAACGGCTCTTC
GGTCATACTAGATGGGCCTCCACTCCCATGGGTCGGGGGAGGCATACTGTGTGGTCGTTT
TCGGTCATTCTAATCACGGTAGCACGTGGGCAGGCGTGGGAGTGTTCGGGATGCGC`;

dna = dna.replace(/\r|\n|\r|\s/g, '')

//Get all possible substrings with a length of >= 4 and <= 12
let DNAArr = Array.from(dna);
let reversePalindromes = []
for (let substrLen = 4; substrLen <= 12; substrLen++) {
    let thislenArrays = []
    for (let i = 0; i <= dna.length - substrLen; i++) {
        thislenArrays.push({
            Pos: {
                start: i,
                end: i + substrLen - 1
            },
            Seq: DNAArr.slice(i, i + substrLen)
        })

    }

    //Find reverse complements of each
    for (let i in thislenArrays) {
        thislenArrays[i].Rc = getRevComp(thislenArrays[i].Seq)
        if (thislenArrays[i].Rc.join("") === thislenArrays[i].Seq.join("")) {
            thislenArrays[i].isMatch = true

        }
        reversePalindromes.push(thislenArrays[i])
    }

}

//Generate Answer  < StartPos : Length >
console.log(reversePalindromes.filter(i => i.isMatch === true))
let formattedAnswer = reversePalindromes.filter(i => i.isMatch === true).map(i => i.Pos.start + 1 + "\t" + (i.Pos.end - i.Pos.start + 1) + "\n").toString().replace(/,/g, '')
console.log(formattedAnswer);
//The sample is missing one of the answers



function getRevComp(dnaP) {
    let dnaArr = [...(Array.isArray(dnaP) === true) ? dnaP : Array.from(dnaP)];
    let reverse = dnaArr.reverse().join("");
    var mapObj = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    }
    let revComp = reverse.replace(/[ACTG]/g, m => mapObj[m])
    //Returns array if the parameter was an array, otherwise returns a string
    return (Array.isArray(dnaP) === true) ? Array.from(revComp) : revComp;
}
