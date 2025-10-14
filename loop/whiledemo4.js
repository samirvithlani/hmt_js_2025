var no=473
var alleven = true;


//473>0 True
while(no>0){
    
    //473 % 10 = 3
    let rem = no % 10 
    
    //3# %2 ==1
    if(rem%2 ==1){
        alleven = false
        break
    }
    no = Math.floor(no/10)   //252/10 25
}
console.log(alleven) // fa;se