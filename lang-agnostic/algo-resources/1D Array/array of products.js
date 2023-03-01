function arrayOfProducts(array) {
	//left to right
	let ltr = {};
	ltr[0] = array[0] * 1;
	for(let idx = 1; idx <= array.length - 1; idx++){
		ltr[idx] = ltr[idx-1] * array[idx]
	}
		
	//right to left
	let rtl = {};
	debugger;
	rtl[array.length-1] = array[array.length - 1] * 1;
	for(let idx = array.length - 2; idx <= 0;  idx--){
		rtl[idx] = rtl[idx+1] * array[idx]
	}
	
	console.log(rtl)
	console.log(ltr);
}

arrayOfProducts([5,2,1,4])