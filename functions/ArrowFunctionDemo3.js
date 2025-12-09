const add = (a,b)=>{
    return a + b
}
var x1 = add(10,20)
console.log(x1)


//10,20 ->findMax

// function findMax (a,b){

//     if(a>b){
//         return a
//     }
//     else{
//         return b
//     }

// }

function findMax (a,b){

    // var max = a>b ? a : b
    // return max

    return a>b ? a : b
    

}
var x2 = findMax(100,1000)
console.log(x2)




const findMax1 = (a,b)=>{
    return a>b?a:b
}
var x3 = findMax1(10,90)
console.log(x3)

//single line arrow function

const findMax2 = (a,b)=>a>b ? a : b
var x4 = findMax2(1,29)
console.log(x4)