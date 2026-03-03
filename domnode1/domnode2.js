// const generateTag =()=>{

//     const container = document.getElementById("container") //<div>
//     const book1h1 = document.createElement("h1") //<h1>
//     book1h1.innerHTML ="JAVA"
//     container.appendChild(book1h1)
// }

var books = ["java","python","c","cpp","jsp","servlet","node","react"]

const generateTag =()=>{

    const container = document.getElementById("container") //<div>

    for(let i=0;i<books.length;i++){
        const bookh1 = document.createElement("h1") //<h1></h1> , <h1></h1>
        bookh1.innerHTML = books[i] //<h1>JAVA</h1> , <h1>python</h1>
        container.appendChild(bookh1) //<div><h1>java</h1> <h1>python</h1></div>
    }
}