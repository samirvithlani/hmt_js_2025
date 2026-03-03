const drawbox =()=>{

    const container = document.getElementById("container") //<div>

    const boxdiv = document.createElement("div") //<div></div>
    boxdiv.style.height="200px"
    boxdiv.style.width="200px"
    boxdiv.style.background="red"

    container.appendChild(boxdiv) //<div><div style="..."></div></div>
}
//array1 =["faccbook","netflix","google"]
//array2 =["https://www/facebook.com","",""]

//generatelinks
//<a href ="array2">array1/a>

var array1 = ["FACEBOOK","NETFLIX","INSTAGRAM"]
var array2 = ["https://www.facebook.com","https://www.netflix.com","https://www.instagram.com"]
const generateLinks = ()=>{
    const container = document.getElementById("container") //<div>

    for(let i=0;i<array1.length;i++){
        const link = document.createElement("a")
        link.href = array2[i]
        link.innerHTML=array1[i]
        container.appendChild(link)
    }

}