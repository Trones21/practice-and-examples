//Should be Exponential
// Time: O(n^2) | Space: O(1)
function twoNumberSum_DoubleForLoop(array, targetSum) {
    for (let i = 0; i < array.length - 1; i++) {
        const firstNum = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const secondNum = array[j];
            if (firstNum + secondNum === targetSum) {
                return [firstNum, secondNum];
            }
        }
    }
    return [];
}

//Should be O(n) time | O(n) space
function twoNumberSum_HashTable(array, targetSum) {
    const nums = {};
    for (const num of array) {
        const potentialMatch = targetSum - num;

        if (potentialMatch in nums) {
            //Isn't this essentially another (inner) loop (we just cant' check anything that hasnt been added, so it's essentially O(n^2)/2?
            //EACH search is O(N) at worst, but we still have to do this for each item in the array (the outer loop), so this still seems like O(n^2)/2 
            //Does this just have to do with the linked lists being smartly allocated so you can maximize the use of registers/avoid pulling data from memory?  
            return [potentialMatch, num];
        } else {
            nums[num] = true;
        }
        return [];
    }
}
let arr = Array.from({ length: 20000 }, () => Math.ceil(Math.random() * 100))


let ExpStart = performance.now();
let x = twoNumberSum_DoubleForLoop(arr, 10);
let ExpEnd = performance.now();
console.log("perf - Double for Loop: " + (ExpEnd - ExpStart))


let htStart = performance.now();
twoNumberSum_HashTable(arr, 10);
let htEnd = performance.now();
console.log("perf - Hash Table: " + (htEnd - htStart))


//I think this was my attempt
function twoNumberSum(array, targetSum) {
    // Write your code here.
    let secondArr = array;
    for (let num of array) {
        console.log(num)
        for (let num2 of secondArr) {
            //cannot add to itself
            if (num !== num2) {
                //console.log(num + " : " + num2)
                if ((num + num2) === targetSum) {
                    return [num, num2];
                }
            }
        }
    }
    return [];
}

console.log(twoNumberSum([3, 5, 7, -4, -8], 10))