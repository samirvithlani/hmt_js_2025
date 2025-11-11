var data = "Amit"
var upperData = ""
//A-65

//diff A --a == 32
for(let i=0;i<data.length;i++){
   // console.log(data[i],"-",data.charCodeAt(i)) //
   // console.log(data[i],"--",data.charCodeAt(i)-32) //65 ->A
   // console.log(data[i],"--->",String.fromCharCode(data.charCodeAt(i)-32))

    
   //a//m //i //t
   //A--else//m//i//t
    if(data.charCodeAt(i)>=97 && data.charCodeAt(i)<=122){
        upperData = upperData + String.fromCharCode(data.charCodeAt(i)-32)
    }
    else{
        //"" = "" + "A "
        upperData = upperData + data[i]
    }
    
}
console.log(upperData)
