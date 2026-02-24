const button =document.getElementById("btn")
button.addEventListener("click",()=>{
   const mydiv = document.getElementById("mydiv") //<div>

   //element create..
   const nameh1 = document.createElement("h1") //<h1>
   nameh1.innerHTML ="HI THIS IS DYNAMIC H1" //<h1>HI THIS...</h1>

   ///binding new created h1 to div
   mydiv.appendChild(nameh1)
})