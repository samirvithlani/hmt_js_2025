//json --> object ->  {key:""}
//JSON class

var user = {id:1,name:"amit",age:23}
console.log(user)
console.log(typeof(user))

// 100 "100"
//false "false"
//{} "{}"

//"{id:1,name:"amit",age:23}"
//user[0] = -->{
//user[1] = -->i

var struser = JSON.stringify(user)
console.log(struser)
// console.log(struser[0])
// console.log(struser[1])


var user2 = JSON.parse(struser)
console.log(user2)

