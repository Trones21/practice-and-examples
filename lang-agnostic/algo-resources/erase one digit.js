function eraseOneDigit(firstnum, secondnum, thirdnum) {
    
    if(Number(firstnum) + Number(secondnum) == thirdnum){  
        return true;
    }
 let arr = Array.from(firstnum.toString())
 console.log(arr)
 let nums = []; 
 for(let i in arr){
     console.log(arr);
     let copy = [...arr];
     let num = copy.splice(i,1).join('');
     
     console.log(num)
     if(num + secondnum == thirdnum){
         return true;
     }
 }
 return false;
}


eraseOneDigit(100, 10, 20)