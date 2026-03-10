console.log("here");
var count = 0;

// var id = setInterval(() => {
//   count++;
//   console.log("here 1", count);

//   if (count == 5) {
//     clearInterval(id);
//   }

// }, 5000);

const root  = document.getElementById("root")
var count=0
var id = setInterval(()=>{
    count++
    const h1 = document.createElement("h1")
    h1.innerHTML=count
    root.appendChild(h1)

    if(count>=10){
        clearInterval(id)
    }
    
},500)
