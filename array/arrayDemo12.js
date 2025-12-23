var names = ["raj","dk","anfal","sahil","kunal","daksh","jay"]
console.log(names)

// names = names.sort()
// console.log(names)

//a =raj ,b =dk
names = names.sort((a,b)=>{return a.length - b.length})
console.log(names)


var data = [100,90,76,54,323,2389,600,1,45,99]
console.log(data)
//data = data.sort()
data = data.sort((a,b)=>a-b) //check line 8 for return statment synt...
console.log(data)
data = data.reverse()
console.log(data)