//console..
//console class
//log --> function
console.log("javascript is loaded...")


//var let const
//scope:
//var: global scope
//let : block scope
//const: block scope:

var x =100;
console.log("Value of x = ",x)

{
    //block..
    console.log("my first block..")
    console.log("value of x inside block ",x)
    var b = 200;
    console.log("value of b inside block = ",b)
}
console.log("value of b outside of block ",b)