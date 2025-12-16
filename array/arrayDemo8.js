// var users = ["raj","jay"]
// var upperUser =[]

// // upperUser.push(users[[0]])
// // upperUser.push(users[[1]])

// for(let i=0;i<users.length;i++){
//     upperUser.push(users[i].toUpperCase())
// }

// console.log(upperUser)

var users = ["raj","jay"]
var upperUser = users.map((u)=>{
    return u.toUpperCase()
})

console.log(upperUser)


var marks = [12,13,15,17,19]
var gracingMarks  = marks.map((m)=>{
    return m+1
})
console.log(gracingMarks)