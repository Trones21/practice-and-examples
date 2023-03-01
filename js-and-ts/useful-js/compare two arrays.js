function compareTwoArrays(firstArr, secondArr) {

    let out = {
        infirstButNotSecond: [],
        inSecondButNotFirst: []
    }

    for (let item of firstArr) {
        if (!secondArr.includes(item)) {
            out.infirstButNotSecond.push(item);
        }
    }

    for (let item of secondArr) {
        if (!firstArr.includes(item)) {
            out.inSecondButNotFirst.push(item);
        }
    }

    return out;

}