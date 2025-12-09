
const toBeCalled = ()=>{
    console.log("toBe called......")
}

const calling = (a)=>{
    console.log(a) //10 + - * . //"abcd" ->stirng. // true --> ==
                    //a function call
       //a == toBeCalled
       a()                 
}

// calling(10)
// calling(true)
// calling("abcd")
// calling({})
calling(toBeCalled) //address