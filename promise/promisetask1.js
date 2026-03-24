// const demo=()=>{
// //    return 100
//     return "ok"
// }
// var x = demo()
// console.log(x)

// var promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("data...")
//     }, 3000);
// })

// console.log(promise)

// promise.then((data)=>{
//     console.log(data)
// })


const payment = ()=>{

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("payment done..")
        }, 3000);
    })

    return promise
}

var x = payment() //promise..
console.log(x)
x.then((data)=>{
    console.log(data)
})
