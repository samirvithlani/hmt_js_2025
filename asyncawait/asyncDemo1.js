const search = ()=>{

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("promise has been resolved...")
        }, 3000);
    })
    return promise
}

//in any function you have to write await keyword , function should be async
const amazone = async()=>{

    console.log("searching...")
    const s = await search() //promise
    console.log(s)
   

}
amazone()