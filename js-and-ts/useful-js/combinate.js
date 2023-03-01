//let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let x = [1, 2, 3, 4]

//Combinations
// accept
// cache-control
// pragma
// accept, cache-control
// cache-control, pragma
// accept, pragma
// accept, cache-control, pragma

let combinations = (arr) => {
    if (arr.length === 0) {
        return [[]];
    }

    let firstEl = arr[0];
    let rest = arr.slice(1);
    let combsWithoutFirst = combinations(rest);
    let combsWithFirst = [];
    combsWithoutFirst.forEach(comb => {
        let combWithFirst = [...comb, firstEl];
        combsWithFirst.push(combWithFirst);
    })

    return [...combsWithoutFirst, ...combsWithFirst];
}


let combs = combinations(x);
let unsorted = [...combs];
combs.sort(function comparelength(arrOne, arrTwo) {
    return arrOne.length - arrTwo.length
});
combs.reverse();
console.log(combs);

let temp = combs.slice(1, 4)
console.log(temp)
//2D Array find element that is common to all
let vals = [];

temp[0].forEach(i => vals.push(i))
for (let arr of temp) {
    for (let i of vals) {
        if (!arr.includes(i)) {
            vals.splice(vals.indexOf(i), 1)
        }
    }

}

console.log(vals)
