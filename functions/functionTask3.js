// function findMax(name1,name2){

//     if(name1.length>name2.length){
//         console.log("name1 is bigger..")
//     }
//     else{
//         console.log("name 2 is bigger..")
//     }
// }
// findMax("amit","sumit")

// function findMax(name1,name2){

//     var name1ind = name1[0]
//     var name2ind = name2[0]

//     // console.log(name1ind)
//     // console.log(name2ind)

//     // console.log(name1.charCodeAt(name1ind))
//     // console.log(name2.charCodeAt(name2ind))

//     if(name1.charCodeAt(name1ind)>name2.charCodeAt(name2ind)){
//         console.log("name is bigger..")
//     }
//     else{
//         console.log("name 2 is bigger..")
//     }

// }
function findMax(name1,name2){
    if(name1.charCodeAt(name1[0])>name2.charCodeAt(name2[0])){
        console.log("name is bigger..")
    }
    else{
        console.log("name 2 is bigger..")
    }

}

findMax("amit","sumit") //amit


