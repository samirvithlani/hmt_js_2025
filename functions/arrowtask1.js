var user1 = {
    name:"amit",
    age:23
}

var user2 = {
    name:"raj",
    age:25
}

const findName = (u1,u2)=>u1.age>u2.age ? u1.name : u2.name
var max = findName(user1,user2)
console.log(max)
