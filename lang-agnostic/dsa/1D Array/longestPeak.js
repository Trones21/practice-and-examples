function longestPeak(array) {
  
	let peakIdxs = [];
	for (let i = 1; i < array.length - 1; i++){
		if (array[i-1] < array[i] && array[i] > array[i+1]){
			peakIdxs.push(i);
		}
	}
	console.log(peakIdxs)
	
	let longestPeak = 0;
	for (let peakIdx of peakIdxs){
		let peakLength = findLengthofPeak(array, peakIdx);
		if(peakLength > longestPeak) longestPeak = peakLength;
	}
	
	return longestPeak;

}

function findLengthofPeak(array, peakIdx){
 let rightPointer = peakIdx + 1;
 let leftPointer = peakIdx - 1;

 //Find Right Edge
while(rightPointer < array.length && array[rightPointer + 1] < array[rightPointer]){
			rightPointer++;
			}
	
//Find Left Edge
while(leftPointer > -1 &&  array[leftPointer - 1] < array[leftPointer]){
		leftPointer--;
		}
	
	//Get range rightIdx - leftIdx //+1 b/c  5 - 3 = 2, but [3,4,5] = 3
	return rightPointer - leftPointer + 1 ;
		
}


longestPeak([5, 4, 3, 2, 1, 2, 1])