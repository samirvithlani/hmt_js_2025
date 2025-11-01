//copy string other variable....

var data = "java"
var copydata = ""

for(let i=0;i<data.length;i++){

    //"" =   "" + "j"
    //"j" = "j"+"a"
    //"ja" = "ja"+"v"
    //"jav" = "jav"+"a"
    //java
    copydata = copydata + data[i]
}
console.log(copydata)