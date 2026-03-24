const orderFood = ()=>{

    console.log("orering food...")
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({name:"panipuri",price:20})
        },3000)
    })
    return promise
    
}

const payment =(amount)=>{

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({amount:amount,message:"payment success"})
        }, 3000);
    })
    return promise
}

const zomato =()=>{

    var x = orderFood() //promise/...
    x.then((orderData)=>{
        console.log(orderData)
        console.log("item name is",orderData.name)
        console.log("item price is",orderData.price)

        console.log("payment hasbeen processed..")
        var pay = payment(orderData.price)//promise..
        pay.then((paymentData)=>{
            console.log("payment done",paymentData)
        })
        

    })

}
zomato()