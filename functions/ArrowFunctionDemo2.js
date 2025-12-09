// const add =(a,b,c)=>{
//     return a + b+ c
// }

// var x = add(10,20,30)
// console.log(x)


//=>a+b+c == return 
const add = (a,b,c)=>a+b+c;
var x = add(10,20,30)
console.log(x)

//find max
// function findMax(a,b){

//     if(a>b){
//         return a
//     }
//     else{
//         return b
//     }
    
// }

function findMax(a,b){

    // var x = a>b ? a : b
    // return x
    return a>b ? a : b
    
}

var max = findMax(100,20)
console.log(max)


const findMax1 = (a,b)=>a>b?a:b
var x1 = findMax1(100,2000)
console.log(x1)


//naman,neha

const findMaxLen =(name1,name2)=>{

    if(name1.length>name2.length){
        return name1
    }
    else{
        return name2
    }
}

var x3 = findMaxLen("naman","neha")
console.log(x3)


// const findMaxLen1 = (name1,name2)=>{
//     return name1.length > name2.length?name1:name2
// }

const findMaxLen1 = (name1,name2)=>name1.length > name2.length?name1:name2
var x4 = findMaxLen1("naman","neha")
console.log(x4)



