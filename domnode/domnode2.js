const button = document.getElementById("btn")
button.addEventListener("click",()=>{
    const mydiv = document.getElementById("mydiv")
    //div
    const box = document.createElement("div")
    
    box.style.height="200px"
    box.style.width="200px"
    box.style.backgroundColor="blue"
    //
    mydiv.appendChild(box)
})