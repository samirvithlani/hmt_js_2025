const science = ()=>{
    console.log("science function called...")
}
const comm = ()=>{
    console.log("comm function called...")
}


//cb callback
const admission = (cb)=>{

    //console.log(cb) //== science
    cb()
}

// admission(science)
// admission(comm)

var pers = 70
if(pers>=80){
    admission(science)
}
else if(pers>=70){
    admission(comm)
}