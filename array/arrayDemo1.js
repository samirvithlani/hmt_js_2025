var users = ["amit","sumit","raj","kunal","ajay","vijay"]

console.log(users);
// console.log(users[0])
// console.log(users[1])
// console.log(users[2])
// console.log(users[3])

//find length of array
console.log(users.length)

//for loop
for(let i=0;i<users.length;i++)
{
    console.log(users[i])
}

//elment add..
var newlen = users.push("parth")
console.log("after pushing 1 elem ",newlen)
console.log(users);

var newlen = users.unshift("Abhay")
console.log("after adding new elm len =",newlen);
console.log(users);



