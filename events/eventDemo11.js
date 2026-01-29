const getData =() =>{
    const x = document.getElementsByTagName("li") //x ==array
    for(let i=0;i<x.length;i++){
        x[i].style.color = "blue"
        //console.log(x[i].innerText)
        if(x[i].innerText=="Java"){
            x[i].style.color = "red"
        }
    }
}