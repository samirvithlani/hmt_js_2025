var data = "hi this is india"
var count=0;
for(let i=0;i<data.length;i++){

    //data[0]=h
    //data[1]=i
    //data[2]=" "
    if(data[i]==" "){
        count++ //1,2,3
    }

}
//aeiou
console.log("spaces = ",count)
var vovelscount = 0;

for(let i=0;i<data.length;i++){
    if(data[i]=="a" || data[i]=="e"||data[i]=="i" || data[i]=="0" || data[i]=="u"){
        vovelscount++
    }
}
console.log(vovelscount)