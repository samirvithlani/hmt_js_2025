const scanning =()=>{
    
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({data:"this is mobile phone bill",amount:1000})
        }, 3000);
    })
    return promise
}

const printing =async()=>{

    console.log("scanning stared..")
    const x = await scanning()
    console.log(x)
}

printing()