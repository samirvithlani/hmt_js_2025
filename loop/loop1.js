//init
//condition
//increment

//for(var i=1;i<=10;i++){

//}

console.log("loop 1")
// for(var i=1;i<=10;i++){
//     console.log(i)
// }

var sum=0
var sp = parseInt(prompt("enter starting point :"))
var ep = parseInt(prompt("enter ending point :"))

//1 -10
for(var i=sp;i<=ep;i++){
    //0 = 0 +1 =1 =1
    //1 = 1 + 2 = 3
    //3 = 3 + 3 = 6
    //6 = 6 + 4 =10..
    sum = sum + i;
    console.log(i)
}
console.log("sum = ",sum)