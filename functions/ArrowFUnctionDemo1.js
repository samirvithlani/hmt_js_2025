//wihout return type without arg

function demo(){
    console.log("demo function called..")

}
demo()

//arrow function con

const demo1 = ()=>{
    console.log("demo1 function called..")
}
demo1()

//with arg without return

function add(a,b){
    console.log(a+b)
}
add(10,20)

const add1 = (a,b)=>{
    console.log(a+b)
}
add1(10,30)


function avg(a,b,c){

    // var ans = a+b+c /2
    // return ans
    return (a + b+ c) /3
}

var x = avg(10,20,30)
console.log(x)

//arrow function con

const avg1 = (a,b,c)=>{
    return (a+b+c)/3
}

var x1 = avg1(100,200,300)
console.log(x1)

//arrow function witg single line..

//{no bracec} no return keyword..
const avg2 = (a,b,c)=>(a+b+c)/3
var x2 = avg2(10,20,100)
console.log(x2)