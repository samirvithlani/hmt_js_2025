var names = ["jay","raj","ajay","rekha","parth","kunal"]

//map .filter --> array return
var rname = names.find((n)=>{
    return n.startsWith("r")
})
console.log(rname)

var numbers = [100,787,345,678,1100,876,99]
//500
var numbergt = numbers.find((n)=>{
    return n>500
})
console.log(numbergt)

//filter and map will return an array
//map will return all elments
//filter will retuen only condition satisfied elmen
//find will return only first elmn which has satisfided condition..
