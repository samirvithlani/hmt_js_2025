var users = ["raj","parth","amit","kunal","jay","raj"]
var flag = false
// console.log(users[0])
// for(let i=0;i<users.length;i++){
//     console.log(users[i])
// }
var count =0
for(let i=0;i<users.length;i++){
    //"raj"3
    //parth -True
    //amit
    //kunal
    count++;
    if(users[i].length>=5){
        flag = true
        break
    }
}

console.log("flag =",flag)
console.log("count=",count)

//some -->loop
//(u)=>{} == users[i]
var flag1 = users.some((u)=>{
    
    return u.length>=5;
})

console.log("flag..",flag1)


