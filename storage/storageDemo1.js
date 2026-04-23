//browser storage --> string..

const storeData =()=>{
    localStorage.setItem("user","amit")
    localStorage.setItem("id",101)
    sessionStorage.setItem("name","ajay")
    const user = {
        name:"amit",age:23
    }
    //localStorage.setItem("userData",user)
   localStorage.setItem("userData",JSON.stringify(user)) 
}

document.getElementById("btn").addEventListener("click",()=>{
    //localStorage.removeItem("user")
    localStorage.clear()
    //sessionStorage.removeItem("name")
    sessionStorage.clear()
})

document.getElementById("btn2").addEventListener("click",()=>{

    var user = localStorage.getItem("user")
    console.log("user-->",user)
    var userData = localStorage.getItem("userData")
    var userObj = JSON.parse(userData)
    console.log(userObj)
    console.log(userObj.name)

    //console.log(userData.name)

})

//var arr = []
var arr = localStorage.getItem("names") // string -->[] -->arr = []
console.log(undefined)
if(arr){
    console.log("if..")
    arr = JSON.parse(arr) //["raj",....]
}
else{
    console.log("else..")
    arr = []
}
const addData =()=>{

    const name = document.getElementById("text").value //jay
    console.log(name)
    arr.push(name) //arr.push-[] -->["jay"]

    //localStorage.setItem("names",name)
    localStorage.setItem("names",JSON.stringify(arr)) //"["jay"]"

}