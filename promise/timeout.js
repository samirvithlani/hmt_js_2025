console.log("here..")
var x;//undefine...
setTimeout(()=>{
    console.log("after 3 second..")
    x = 100
},1000)
//wait...
console.log("here 2",x)



const root = document.getElementById("root")
// setTimeout(() => {
//     for(let i=1;i<=10;i++){
//         const h1elm = document.createElement("h1")
//         h1elm.innerHTML = i
//         root.appendChild(h1elm)
//     }
// }, 3000);

setTimeout(() => {
    const h1 = document.createElement("h1")
    h1.innerHTML=1
    root.appendChild(h1)
}, 1000);
setTimeout(() => {
    const h1 = document.createElement("h1")
    h1.innerHTML=2
    root.appendChild(h1)
}, 2000);
setTimeout(() => {
    const h1 = document.createElement("h1")
    h1.innerHTML=3
    root.appendChild(h1)
}, 3000);
