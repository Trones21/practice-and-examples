function findThreeLargestNumbers(array) {
  	
	let threeLargest = [-Infinity, -Infinity, -Infinity];
	for(let n of array){
		 threeLargest = updateLargest(threeLargest, n)
	}
	return threeLargest;
}

function updateLargest(threeLargest, n){
	//get Smallest and replace
	let smallestOfThree = threeLargest[0];
	let smallestOfThreeIdx = 0;
	for(let [idx, val] of threeLargest.entries()){
		if(val < smallestOfThree){
			smallestOfThree = val;
			smallestOfThreeIdx = idx;
		}	
	}
	if(n >= smallestOfThree){
		threeLargest[smallestOfThreeIdx] = n;
	}
	return threeLargest;
}


let x = findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])

console.log(x)