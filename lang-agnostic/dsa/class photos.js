function classPhotos(redShirtHeights, blueShirtHeights) {

	redShirtHeights.sort((a, b) => a - b);
	blueShirtHeights.sort((a, b) => a - b);
	
	let backRow = [];
	let frontRow = [];
	
	for(let i in redShirtHeights){

		if(redShirtHeights[i] === blueShirtHeights[i]){
			//Entire (sorted) arrays are equal, return false
			if(i === redShirtHeights.length - 1){
				return false;
			}
			continue;
		}
		if(redShirtHeights[i] < blueShirtHeights[i]){
			backRow = blueShirtHeights
			frontRow = redShirtHeights
			break;
		}
		if(redShirtHeights[i] > blueShirtHeights[i]){
			backRow = redShirtHeights
			frontRow = blueShirtHeights
			break;
		}
	}
	
	for(let i in backRow){
		//Back Row person too short
		if(backRow[i] <= frontRow[i]){
			return false;
		}
	}
	return true;
}


classPhotos([6], [6])
console.log("asdsad")