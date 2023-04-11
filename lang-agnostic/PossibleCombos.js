function nCr(n, r) {
    return fact(n) / (fact(r) * fact(n - r));
}

// Returns factorial of n
function fact(n) {
    if (n == 0)
        return 1;
    var res = 1;
    for (var i = 2; i <= n; i++)
        res = res * i;
    return res;
}


let possibleCombos = {}
for (let n = 1; n < 30; n++) {

    let thisNtotal = 0
    for (let r = 1; r <= n; r++) {
        thisNtotal += nCr(n, r)
    }
    possibleCombos[n] = thisNtotal

}

console.log(possibleCombos)
