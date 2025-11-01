var data = "naman"
var reverseData = ""

for(let i=data.length-1;i>=0;i--){
    // "" =  ""+a
    //a =  a+v
    //av = av + a
    //ava = ava + j
    //avaj
    reverseData = reverseData + data[i]
}
console.log(reverseData)

//palindrome name : naman, bob,anna,madam,malayalam

if(data == reverseData){
    console.log("this name is palindrome...")
}
else{
    console.log("this name is not palindrome ,,,")
}