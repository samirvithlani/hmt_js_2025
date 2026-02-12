const button = document.getElementById("btn") //<button>
console.log(button)//null

button.addEventListener("click",()=>{
    button.innerText="Clicked"
})
button.addEventListener("dblclick",()=>{
        console.log("dbl clicked...")
})
button.addEventListener("mouseenter",()=>{
    button.style.backgroundColor="green"
})
button.addEventListener("mouseleave",()=>{
    button.style.backgroundColor="red"
})

const box = document.getElementsByClassName("box") //<div></div> <div>
console.log(box)//[,,,,]
box[0].addEventListener("mouseenter",()=>{
    box[0].style.backgroundColor = "red"
})
box[1].addEventListener("mouseenter",()=>{
    box[1].style.backgroundColor = "green"
})