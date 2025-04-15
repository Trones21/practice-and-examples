//Search values 
//return object path

let data = {
    "kj": 45,
    "foo": [
        { 'bar': 'nope' },
        { 'baz': ['pot_of_gold'] },
        { 'xyzy': { 'just_a': 'lump_of_coal' } }
    ]
}

// assert(
//     search(data, 'pot_of_gold') == ['foo',1,'baz',0]
// )



function main(obj, tgtValue) {
    let fullObjPath = [];

    if (Array.isArray(obj)) {
        let ArrIterator = obj.entries()
        for (let i of ArrIterator) {
            if (i.val === tgtValue) {
                console.log(i.value)
                //Found value 
                fullObjPath.push(res)
                return fullObjPath;
            }
            let res = recurse({ k: v }, tgtValue);
            if (res !== null) {
                fullObjPath.push(res)

            }
        }
    }

    if (!Array.isArray(obj)) {
        for (let [k, v] of Object.entries(obj)) {
            if (v === tgtValue) {
                //Found value
                fullObjPath.push(res)
                return fullObjPath;
            }

            let res = recurse({ k: v }, tgtValue);
            if (res !== null) {
                fullObjPath.push(res)
            }

        }
    }


    return fullObjPath;


}

function recurse(obj, tgtValue) {
    console.log({ "recurse": obj })
    if (Array.isArray(obj)) {
        let ArrIterator = obj.entries()
        for (let i of ArrIterator) {
            if (i.val === tgtValue) {
                console.log(i.value)
                //Found value 
                return i;
            }
            let res = recurse(i, tgtValue);
            if (res !== null) {
                fullObjPath.push(res)
            }
        }
    }

    if (!Array.isArray(obj)) {
        for (let [k, v] of Object.entries(obj)) {
            if (v === tgtValue) {
                //Found value
                return k;
            }

            let res = recurse({ k: v }, tgtValue);
            if (res !== null) {
                fullObjPath.push(res)
            }

        }
    }
}




// function r(obj, tgtValue){
//  if(Array.isArray(obj)){
//         for(let i of obj){
//            if(i.value === tgtValue){
//                //Found value 
//                //return 
//             }

//             }
//     return null;
//     }

// if(!Array.isArray(obj)){
//     for(let [k, v] of Object.entries(obj)){
//         if(v === tgtValue){
//             //Found value
//             //recurse({k:v})
//         }
//     }
//     return null;
// }

// }


main(data, 'nope');