function findMax(a,b,c){

    if(a>b && a>c){
        console.log("a is bigger..")
    }
    else if(b>c){
        console.log("b is bigger..")
    }
    else if(a==b  && b==c){
        console.log("all are same..")
    }
    else{
        console.log("c is bigger..")
    }
}

findMax(10,10,10)