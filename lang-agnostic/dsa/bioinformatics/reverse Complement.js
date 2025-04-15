console.log(getRevComp());
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