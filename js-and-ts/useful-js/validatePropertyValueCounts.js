
//We want to check the count of values (for a specific key) 
//in an array of objects  

//This: validateCounts(items, "a", {123:4, 456:3, zzq: 3}) 
//returns false for zzq because our items array only
//contains one object with a:'zzq'  

//This: validateCounts(items, "a", {123:4, 456:3, zzq: 1}) 
//returns true 
let items = [{ a: 123 },
{ a: 123 },
{ a: 456 },
{ a: 456 },
{ a: 'zzq' },
{ a: 123 },
{ a: 123 },
{ a: 456 },
]



//This doesn't currently tell you if there are extra items (ids) that 
//are NOT in the countMap
async function validateCounts(items, key, countMap) {
    let hashMap = {}
    for (let i of items) {
        if (!hashMap[i[key]]) {
            hashMap[i[key]] = 1
        } else {
            hashMap[i[key]] += 1
        }
    }


    let misMatch = false;
    for (let [k, v] of Object.entries(countMap)) {
        if (!hashMap.hasOwnProperty(k)) {
            countMap[k] = { expectedAmount: v, FoundinHashMap: false }
        } else {
            countMap[k] = { expectedAmount: v, FoundinHashMap: hashMap[k] }
            if (v === hashMap[k]) {
                countMap[k].match = true
            } else {
                countMap[k].match = false
                misMatch = true

            }
        }
    }

    if (misMatch === true) {
        console.warn(countMap)
        return false
    } else {
        return true
    }

}



validateCounts(items, "a", { 123: 4, 456: 3, zzq: 3 })


//no idea what i was doing here
// let hashMap = {}
// for(let i of items){
//     if(!hashMap[i["a"]]){
//         hashMap[i["a"]] = 1
//     }else{
//         hashMap[i["a"]] += 1
//     }
// }

// console.log(hashMap)