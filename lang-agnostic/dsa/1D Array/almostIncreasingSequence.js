function almostIncreasingSequence(sequence) {
    if(sequence.length <= 2){
        return true;
    }
    
    let removals = 0;
    for(let i = 0; i < sequence.length; i++){
        let val = sequence[i]
        //Last item
        if(i === sequence.length - 1){
            
            if(val <= sequence[i - 1]){
            removals += 1;
            continue;
            }
        }
        //Normal Route
        if(val >= sequence[i + 1]){
            removals += 1;
               //Check Neighbor Compatibility   
                if(sequence[i - 1] >= sequence[i + 1]){
                return false;
            }
        }
    }
    
     if(removals > 1){
        return false;
            }
    return true;
}

console.log(almostIncreasingSequence([1,2,3,4,3,6]))


