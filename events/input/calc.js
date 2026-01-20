const calcdemo = (event)=>{


    const no1 = parseInt(document.getElementById("no1").value)
    const no2 = parseInt(document.getElementById("no2").value)
    const op = document.getElementById("op").value
    const ans = document.getElementById("ans")

    // console.log(no1)
    // console.log(no2)
    // console.log(op)

    if(op=="+"){
        ans.innerHTML = no1+no2
    }
    else if(op=="-"){
        ans.innerHTML = no1 - no2
    }
}