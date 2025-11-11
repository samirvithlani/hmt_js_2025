//key:value
// var student = {
//     sname:"amit",
//     sage:23,
//     spers:87,

//     city:"Ahmedabad",
//     area:"Navrangpura",
//     pincode:380052
// }
// console.log(student)
// console.log(typeof(student)) //object
// console.log("Name :",student.sname)
// console.log("Age",student.sage)
// console.log("Pers",student.spers)
// console.log("city",student.city)
// console.log("area",student.area)
// console.log("pincode",student.pincode)
// console.log("street",student.street)



var student = {
    sname:"amit",
    sage:23,
    spers:87,
    address:{
        city:"Ahmedabad",
        area:"Navrangpura",
        pincode:380052
    }
}
console.log(student)
console.log(typeof(student)) //object
console.log("Name :",student.sname)
console.log("Age",student.sage)
console.log("Pers",student.spers)
//console.log("city",student.city)
//console.log("area",student.area)
//console.log("pincode",student.pincode)
console.log("address",student.address)//object
console.log("city",student.address.city)
console.log("area",student.address.area)
console.log("pincode",student.address.pincode)

console.log("street",student.street) //undefined
