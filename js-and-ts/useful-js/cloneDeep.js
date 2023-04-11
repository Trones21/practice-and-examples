//Import lodash 

//Lodash is imported to the window object
var _ = window._;

//Explain the usefulness of the clonedeep method
let x = { "assd": { "kk": 123, "gg": 45 } }
let y = _.cloneDeep(x)
console.log(x)
console.log(y)
console.log(x === y);