// var data = document.getElementById("text")
// console.log("data....",data)

//arrow || function....

const get=()=>{
    //alert("get functon called....")
    console.log(document.getElementById("text"))
    console.log(document.getElementById("text").innerText)
    console.log(document.getElementById("text").innerHTML)

    let h1Value = document.getElementById("text").innerText
    console.log(h1Value)

    document.getElementById("text").innerText = "Hi"

}