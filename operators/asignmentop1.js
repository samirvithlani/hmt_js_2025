var a = 100
var b = 200

console.log("a = ",a)
console.log("b = ",b)

//temp = 100
var temp =a;
//a = 200
a = b;
//b =100
b = temp;

console.log("a = ",a)
console.log("b = ",b)

//without temp...

var x =10
var y =20

// //x = 100 + 200 = 300
// x = x + y
// //y = 300 - 200 = 100
// y = x - y
// //x = 300 -100 = 200
// x = x - y


//x = 10 * 20 = 200
x = x * y
//y = 200/20 = 10
y = x / y
//x = 200/10 = 20
x = x / y


console.log("value of x",x)
console.log("value of y",y)

