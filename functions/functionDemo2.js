//let name -> block  scope
//with argument without return typr
function greet(name){
    
    console.log("Hello ",name)
}

greet("Rahul") 
greet() //no error..undefined
var sname = "jay"
greet(sname) //call by value..

function add(a,b){

    console.log("add ..",a+b) //10 + undefined --> Nan not a number
}

add(10,20)
add("Ram ","Mishra ")
add("10","20")
//a =10,b=undefined
add(10)



function average(no1,no2,no3){

    console.log((no1+no2+no3)/3)
}
average(10,20,30)