function add(a,b){

    //console.log(a+b)
    var c = a + b
    return c; //30
}

var ans = add(10,20)
console.log("ans =",ans)

var ans = add(10,20)
console.log("addition =",ans)

function joint(fname,lname){

    return fname + " "+ lname
}

var fullName= joint("Virat","Kohli")
console.log("fullName = ",fullName)

//whichever function is returning we can call direclty that function in log function to print it..
console.log("fullName = ",joint("Ms","Dhoni"))


//create function accept 1 string arg and return in uppercase..

function convert(name){

    return name.toUpperCase()
}

console.log(convert("amit"))


//pass 5 subject marks in function and return grade of it
//80>"A"