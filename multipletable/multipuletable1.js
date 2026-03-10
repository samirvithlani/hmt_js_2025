const size = 15 
const tableheader = document.getElementById("tableheader")

var header = "" //""
header+="<tr><th>X</th>" 
for(let i=1;i<=size;i++){

    header+=`<th>${i}</th>`
}
header+="</tr>"
tableheader.innerHTML = header

const tablebody =document.getElementById("tablebody")
var body =""
for(let i=1;i<=size;i++){
    body+=`<tr><th>${i}</th>`
    for(let j=1;j<=size;j++){
        body+=`<td>${i*j}</td>`
    }
    body+="</tr>"

}
tablebody.innerHTML = body