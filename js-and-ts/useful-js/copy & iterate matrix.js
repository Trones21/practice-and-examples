let matrix = [
    [3,'fg', 'r'],
    [789, 'hji', 6, 'kkk'],
    ['ss', 777]
    ];
    
    //Copy 
    let copy = [];
    for(let row in matrix){
        copy.push([])
        for(let col in matrix[row]){
            copy[row].push(false);
        }
    }
    
    //Proof that this is an actual copy (It isn't just pushing pointers)
    //Ensure iterate portion is commented out, otherwise the log will show the final "transformed" value
    console.log(matrix)
    console.log(copy)
    
    
    //Iterate
    // for(let row in copy){
    //     for(let col in copy[row]){
    //         copy[row][col] = 'lll'
    //     }
    // }
    
    // console.log(copy)