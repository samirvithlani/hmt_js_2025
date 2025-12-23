var data = [[100,20,30],[400,50,60],[700,80,90]]
console.log(data)
//[100,20,30,400,50,60,700,80,90]
//var newdata =[]

// for(let i=0;i<data.length;i++){
//     //console.log(data[i].length) //[100,20,30] //3
//     for(let j=0;j<data[i].length;j++){
//         //console.log(data[i][j])
//         newdata.push(data[i][j])
//     }
// }
// console.log(newdata)



var newdata = data.flatMap((d)=>{
    return d;
})
console.log(newdata)



