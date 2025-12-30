const getLink=()=>{

    //console.log(document.getElementById("link"))
    //here x is user define variable..  --> and("link") is id name in html
    var x = document.getElementById("link")
    console.log(x)
    //console.log(document.getElementById("link").href)
    console.log(x.href)
    console.log(x.innerText)
    x.innerText = "Netflix"
    x.href = "https://www.netflix.com"




}