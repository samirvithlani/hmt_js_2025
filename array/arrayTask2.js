var names = ["rajvi","parth","sneha","jayraj","amitabh","virat"]
// var filterNames = names.filter((name)=>{
//     return name.length>5
// })
// console.log(filterNames)
// var filterNamesupper = filterNames.map((fn)=>{
//     return fn.toUpperCase()
// })
// console.log(filterNamesupper)

var filterNames = names.filter((name)=>{
    return name.length>5
}).map((fn)=>{
    return fn.toUpperCase()
})
console.log(filterNames)



var names = ["rajvi","parth","sneha","jayraj","amitabh","virat"]
//find first name starts with  either p or s and print in upper

// var foundName = names.find((n)=>n.startsWith("p") || n.startsWith("s"))
// console.log(foundName.toUpperCase())

var foundName = names.find((n)=>n.startsWith("p") || n.startsWith("s")).toUpperCase()
console.log(foundName)