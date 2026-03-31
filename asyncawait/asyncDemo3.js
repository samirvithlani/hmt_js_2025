
const search = ()=>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({item:"pizza",price:200})
        }, 3000);
    })
    return promise
}
const cart = (dish)=>{

    //dish {item,price,qty}
    var total = dish.qty * dish.price
    dish.totalAmount = total
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({message:"added to cart",dish})
        }, 2000);
    })
    return promise
}
const payment = (amount)=>{

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({message:"payment done..",amount:amount,transActionId:12345})
        }, 3000);
    })
    return promise
}

const zomato =async ()=>{

    console.log("welcome to zomato")
    console.log("searching dish")

    const dish = await search()
    console.log(dish) //{item,price}
    console.log("adding items to cart..")

    //add qty to dish variable
    dish.qty =5
    const c = await cart(dish) //{item,price,qty,totalAmount}
    console.log("cart...",c)
    //console.log(c.dish.totalAmount)
    console.log("payment processing...")
    const pay = await payment(c.dish.totalAmount)
    console.log(pay)//{message,amount,tid..}

}
zomato()
