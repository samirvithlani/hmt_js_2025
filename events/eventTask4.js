
var colorList = ["red","green","blue","yellow","pink"]
var count =0
const changeColor =()=>{

    const box = document.getElementById("box")
    box.style.backgroundColor = colorList[count] //0
    count++

}