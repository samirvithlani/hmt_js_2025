var users = ["raj","jay","ajay","parth","priya","sumita","neha","kunal"]
var newusers =[]
//#name lentgh >4 new arrray
for(let i=0;i<users.length;i++){
    //console.log(users[i].length)
    if(users[i].length>4){
        newusers.push(users[i])
    }
}
console.log(newusers)


var data = [100,20,31,45,66,78,92,93,44,57,89]
var newdata=[]

for(let i=0;i<data.length;i++){
    if(data[i] % 2 ==0){
        newdata.push(data[i])
    }
}
console.log(newdata)

var users = ["raj","jay","ajay","parth","priya","sumita","neha","kunal"]
var newuser2=[] //#a end 

for(let i=0;i<users.length;i++){
    if(users[i].endsWith("a")){
        newuser2.push(users[i])
    }
}

console.log(newuser2)

var users = ["raj patel","jay shah","ajay","parth thakkar","priya","sumita","neha modi","kunal"]
var fullname =[]

for(let i=0;i<users.length;i++){
    if(users[i].includes(" ")){
        fullname.push(users[i])
    }
}
console.log(fullname)

