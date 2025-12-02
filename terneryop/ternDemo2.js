var x = 100;
var y = 200;

var max = undefined;

if (x > y) {
  max = x;
} else {
  max = y;
}
console.log("max = ", max);

var max1;
//x>y ? console.log(x):console.log(y)
max1 = x>y ? x :y
console.log(max1)


var age = 18;
var isEligble; // true //false
// if(age>=18){
//     isEligble = true
// }
// else{
//     isEligble = false
// }
// console.log(isEligble)



isEligble = age>=18 ? true : false
console.log(isEligble)



