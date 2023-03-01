// function solution(X) {
//     // write your code in JavaScript (Node.js 8.9.4)

// }

// class node{
//     constructor(value){
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }


//   insert(value) {
//       if(this.left )
//     return this;
//   }

//   contains(value) {
//     // Write your code here.
//   }

//   remove(value) {
//     // Write your code here.
//     // Do not edit the return statement of this method.
//     return this;
//   }
// }



// let data = [
// {categoryId: 100, parentCategoryId: -1, Name:"Business", Keywords: "Money"},
// {categoryId: 200, parentCategoryId: -1, Name:"Tutoring", Keywords: "Teaching"},
// {categoryId: 101, parentCategoryId: 100, Name:"Accounting", Keywords: "Taxes"},
// {categoryId: 102, parentCategoryId: 100, Name:"Taxation"},
// {categoryId: 201, parentCategoryId: 200, Name:"Computer"},
// {categoryId: 103, parentCategoryId: 101, Name:"Corporate Tax"},
// ];

let data = [
    { categoryId: 56, parentCategoryId: 62, ggg: "sfsdf" },
    { categoryId: 81, parentCategoryId: 80, hhh: "sasdfsdf" },
    { categoryId: 74, parentCategoryId: null, kk: "sdfsdf" },
    { categoryId: 76, parentCategoryId: 80 },
    { categoryId: 63, parentCategoryId: 62 },
    { categoryId: 80, parentCategoryId: 86 },
    { categoryId: 87, parentCategoryId: 86 },
    { categoryId: 62, parentCategoryId: 74 },
    { categoryId: 86, parentCategoryId: 74 },
];

let idMapping = data.reduce((acc, el, i) => {
    acc[el.categoryId] = i;
    return acc;
}, {});

console.log(idMapping)

let root;
data.forEach(el => {
    // Handle the root element
    if (el.parentCategoryId === null) {
        root = el;
        return;
    }
    // Use our mapping to locate the parent element in our data array
    let parentEl = data[idMapping[el.parentCategoryId]];
    // Add our current el to its parent's `children` array
    parentEl.children = [...(parentEl.children || []), el];
});


console.log(root)


