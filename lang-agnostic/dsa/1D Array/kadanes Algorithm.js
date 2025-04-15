//Can use for maxSum subarray
function kadanesAlgorithm(array) {
    let maxEndingHere = array[0];
    let maxSoFar = array[0];
    for (let num of array) {
        maxEndingHere = Math.max(num, (maxEndingHere + num));
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
        console.log(maxSoFar);
    }
    return maxSoFar;
}


let x = kadanesAlgorithm([3, 5, -1, 4]);

console.log(x)


Kadane’s is based on a core idea from dynamic programming:

At every position, the best subarray ending here is either:

 - The current value by itself (start over), or
 - The previous best subarray extended by this value (continue the streak)
