const order = ()=>{

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
               // resolve("order has been placed...")
              reject("order rejected..")
        }, 3000);
    })
    return promise
}


const placeOrder = async()=>{

    try{
        const o = await order() //-->catch
        console.log(o)
    }catch(err){
        console.log("err.....",err)
    }

}
placeOrder()