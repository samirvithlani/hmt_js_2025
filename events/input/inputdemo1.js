const getInput =(event)=>{
    const name = document.getElementById("name") //<input>
    console.log(name.value)
}

const getEmailInput =(event)=>{
    const email = document.getElementById("email")
    console.log(email.value)
}

const getAgeInput= (event)=>{
    const age = document.getElementById("age") // null
    console.log(age)
    console.log(age.value)
    if(age.value<18){
        alert("age is not valid...")
    }
}