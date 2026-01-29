const getData =() =>{
    const x = document.getElementsByTagName("li") //x ==array
    for(let i=0;i<x.length;i++){
        x[i].style.color = "blue"
    }
}