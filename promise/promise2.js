//zomato food order ---> search --> order -->payment..
//search -->3 second..
// console.log("searching food...")
// console.log("ordering..food...")
// console.log("payment done..")

// setTimeout(() => {
//     console.log("searching food..")
// }, 3000);

// console.log("ordering..food...")
// console.log("payment done..")

console.log("searching food..")
const promise = new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve("i have searched pizza please order it..")
    }, 3000);
})

promise.then((data)=>{
    console.log(data)
    console.log("order has been done..")
    console.log("payment success...")
})