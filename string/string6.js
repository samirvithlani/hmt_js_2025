var lang = "javascripta"
var index = -1;
//c -> index
//a -> index

for(let i=0;i<lang.length;i++){
    
    //lang[0] = j
    //lang[1] = a
    //lang[2] = v
    //lang[3] = a
    //lang[4] = s
    //lang[5] = c
    if(lang[i]=="a"){
        index = i;//1
        break
    }
}
console.log("index = ",index)