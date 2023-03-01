function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
 
	
	//Sort
	redShirtSpeeds.sort((a, b) => {return a - b});
	blueShirtSpeeds.sort((a, b) => {return a - b});
    console.log("adsadasd")
    debugger;
	if(fastest === true){
		//Pair fastest with slowest
		let minTotalSpeed = 0;
		let goingRight = 0;
		for(let goingLeft = redShirtSpeeds.length - 1; goingLeft >= 0; goingLeft--){
				let a = Math.max(...[redShirtSpeeds[goingLeft], blueShirtSpeeds[goingRight]])
				minTotalSpeed += a;
			goingRight += 1;
			}
		return minTotalSpeed; 
	} else{
		
		//Pairs are the indexes (We want to cancel out fast speeds by pairing with fast)
			let maxTotalSpeed = 0;
			for(let i = redShirtSpeeds.length - 1; i >= 0; i--){
				maxTotalSpeed += Math.max([redShirtSpeeds[i], blueShirtSpeeds[i]])
			}
		return maxTotalSpeed; 
	}
 
	
}

let obj = {
  "blueShirtSpeeds": [3, 6, 7, 2, 1],
  "fastest": true,
  "redShirtSpeeds": [5, 5, 3, 9, 2]
}

tandemBicycle(obj.redShirtSpeeds, obj.blueShirtSpeeds, obj.fastest);
