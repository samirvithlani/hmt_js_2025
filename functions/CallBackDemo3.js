const science = (name)=>{
    console.log("admission confirmed in science ",name)
}
const comm = (name)=>{
    console.log("admission confirmed in comm ",name)
}

const admission = (cb,studentName)=>{
    //cb() //comm == comm()
    //cb("raj")
    cb(studentName)
}

var pers = 80
var sname = "jay"
if(pers>=80){
    admission(science,sname)
}
else if(pers>=70){
    admission(comm,sname)
}