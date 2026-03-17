console.log("searching food...")
//var favitem = "piiza"
//array ["10 food items"]
const promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({name:"Italian pizza",price:300})
        //reject("no food found..")
    }, 3000);
})

promise.then((data)=>{
    console.log(data)
    console.log("ordering food "+data.name)
    console.log("payment done of rs"+data.price)
})

//when promise get rjected... it will go to find catch block
promise.catch((error)=>{
    console.log(error)
})
