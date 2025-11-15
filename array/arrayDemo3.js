var users = ["amit","sumit","raj","kunal","ajay","vijay"]
console.log(users);


//splice function (index,deletecount,"element")

//users.splice(1,0,"neha") //1st index neha add and remove nothing..
//users.splice(3,0,"neha","jaya")


//remove from specific index..

//users.splice(2,1) //goto 2nd index and remove 1 element
//users.splice(2,3) //goto 2nd index and remove 3 element


//add remove ...
users.splice(2,1,"neha","jaya")
console.log(users)
