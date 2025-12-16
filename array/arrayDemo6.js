var marks = [23,24,19,25,21,24,20]

//pass -v-> 20 up
// var flag = true
// for(let i=0;i<marks.length;i++){
//     if(marks[i]<20){
//         flag = false
//         break
//     }
// }

// console.log(flag)

// var users = ["kunal","jay","meet","raj","ajay","neha"]
// var flag1 = true
// for(let i=0;i<users.length;i++){
//     if(users[i].length>=4){
//         flag1 = false
//         break
//     }
// }
// console.log(flag1)


var flag = marks.every((m)=>{
    return m>15
})
console.log(flag)