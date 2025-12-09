const imageHandler = (fileName)=>{
    //abc.jpg
    console.log(fileName , " opened with image handler")
}
const pdfHandler = (fileName)=>{
    console.log(fileName , " opened with pdf handler")
}
const docHandler = (fileName)=>{
    console.log(fileName , " opened with doc handler")
}


const fileHandle = (cb,file)=>{
        //cb == imageHanlder
        //file == abc.jpg
        cb(file)
}

var fileName = "abc.pdf";

if(fileName.endsWith(".jpg")){
    fileHandle(imageHandler,fileName)
}
else if(fileName.endsWith(".pdf")){
    fileHandle(pdfHandler,fileName)
}
else if(fileName.endsWith(".doc")){
    fileHandle(docHandler,fileName)
}