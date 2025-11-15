var data = ["ahmedabad","surat","himmatnagar","gandhinagar","rajkot","bhavnagar"]
var datalen = []
var datanagar = []

//city len >6 -->new array push..

for(let i=0;i<data.length;i++){

    if(data[i].length>6){
        datalen.push(data[i])
    }
}

console.log(datalen)

for(let i=0;i<data.length;i++){

    if(data[i].endsWith("nagar")){
        datanagar.push(data[i])
    }
}

console.log(datanagar)

var sales = [1000,1800,2000,2000,1200,4000,4500]
//10 % dis
var salesafterdis =[]
//salesafterdis = [900,1620,1800,1800..]

for(let i=0;i<sales.length;i++){
    salesafterdis.push(sales[i]-sales[i]*0.1)
}
console.log(salesafterdis)

var shapes = ["square","triangle","square","dimond","circle","circle","rectangle"]
var uniqueShapes =[]

for(let i=0;i<shapes.length;i++){

    //square,trangle,sqaure
    //[].incluces(square) //True
    //[square,tri..].includes(square) //False
    if(!uniqueShapes.includes(shapes[i])){
        uniqueShapes.push(shapes[i]) //sqaure
    }
    
}
console.log(uniqueShapes)