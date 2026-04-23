//browser storage --> string..

const storeData =()=>{
    localStorage.setItem("user","amit")
    localStorage.setItem("id",101)

    sessionStorage.setItem("name","ajay")
}

document.getElementById("btn").addEventListener("click",()=>{
    //localStorage.removeItem("user")
    localStorage.clear()
    //sessionStorage.removeItem("name")
    sessionStorage.clear()
})