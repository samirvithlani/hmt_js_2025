// console.log("line 1")
// //console.log("line 2") //line 2 exceute 3 second..
// setTimeout(() => {
//     console.log("line 2") //line 2 exceute 3 second..
// }, 3000);
// console.log("line 3")

//resolve -->success -->represnt
//reject --> fail ---    ""
//resolve rject both are functions

//promise has 3 stages 1 pending , 2)resolve 3)reject
//we will go for watch movie tomorrow?

//today -->tomorrow --> pending..
//tomorrow if we go for movie promise fullfill
//tomorrow if we go for movie promise reject


console.log("line 1")
const promise = new Promise((resolve,reject)=>{
    //resolve("Promise has been resolved...")
    setTimeout(()=>{
        resolve("promise has been resolved...")
    },5000)
})

console.log(promise) 
//if promise get resolve it will go for check then block..
promise.then((data)=>{
    console.log(data)
})