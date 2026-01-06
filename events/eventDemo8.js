//generate random no
var rno = Math.random()*1000 //0 -->999 --> random no
console.log(rno)

var rno1 = Math.floor(Math.random()*1000)
console.log(rno1)

const genRandomNo =()=>{
    var randomNo = Math.floor(Math.random()*1000)
    //get h1 tag
    var h1tag = document.getElementById("no")
    h1tag.innerHTML = randomNo
}