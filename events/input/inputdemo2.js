const getNameInput =(event)=>{
    const name = document.getElementById("name")
    const nameError = document.getElementById("nameError") //<p>
    console.log(name.value)
    if(name.value.length<3){
        //alert("invalid..")
        nameError.innerText = "name is not valid"   
        nameError.style.color = "red"
    }
    else{
        nameError.innerText = ""
    }
}