function minimumPassesOfMatrix(matrix) {
    let totalItems = 0;
      let totalPositive = 0;
      let positiveIndiceMap = {}
      
      //get total item count
      for(let r of matrix){
          for(let c of r){
              totalItems += 1;
          }
      }
  
  //We should always be able to convert at least one, so 
  //if passes === totalItems, then fail
  let totalPasses = 0;
  while(totalItems !== Object.keys(positiveIndiceMap).length){ //check this
      for(let rowIdx of matrix){
          for(let [colIdx, item] in rowIdx.entries()){			
              let val = matrix[rowIdx][colIdx];
              let id = "r" + rowIdx.toString() + "c" + colIdx.toString();
              if(!positiveIndiceMap.hasOwnProperty(id)){
                  if(val > -1){
                      positiveIndiceMap[id] = val;				
                  }else{
                      if(hasPositiveNeighbor({rowIdx:rowIdx, rowIdx:colIdx})){
                          positiveIndiceMap[id] = val;
                          matrix[rowIdx][colIdx] = Math.abs(val);
                      }
                  }
              }
          }
      }
      //All Integers are already positive on first pass
      if(totalPasses === 0 && totalItems === Object.keys(positiveIndiceMap).length){
      return 0;
      }
      totalPasses += 1;
      if(totalPasses > totalItems){
          return -1;
      }
  }
  return totalPasses;	
      
    
  }
  
  function hasPositiveNeighbor(idxPair, matrix){	 	
          let potentialPos = [];
          potentialPos.push([idxPair.rowIdx + 1, idxPair.colIdx]) //above
          potentialPos.push([idxPair.rowIdx - 1, idxPair.colIdx]) //below
          potentialPos.push([idxPair.rowIdx, idxPair.colIdx + 1]) //right
          potentialPos.push([idxPair.rowIdx, idxPair.colIdx - 1]) //left
    
      for(let item of potentialPositives){
          try{
              let val = matrix[item[0]][item[1]];
              if(val > 0){
                  return true;
              }
          }
          catch{
  
              }
      }
      return false;
  }
  
  
  console.log(minimumPassesOfMatrix([[1]]))
  