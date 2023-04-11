
let responses = {
    arr: [{
        key: 'a',
        result: 'fail'
    },
    {
        key: 'b',
        result: 'success'
    },
    {
        key: 'c',
        result: 'fail'
    },
    {
        key: 'd',
        result: 'fail'
    }]

}

let w = responses.arr.reduce((out, r) => { if (r.result === 'fail') { return out + r.key + '; ' } else { return out } }, '')

console.log(w)