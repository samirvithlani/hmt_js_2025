var no  =432 // 1 + 2 + 3 =6

//123 % 10 =3
//123 / 10= no =12

//12 % 10 = 2
//12 / 10 = 1


//1 % 10 = 1
//1 /10 = 0

var sum=0
while(no>0){

    let rem = no % 10 //3 2 //1
    sum = sum + rem  // 0 + 3 = 3  = 3 + 2 = 5 5 = 5+1 =6
    no = Math.floor(no/10) //12 //1 //0
}
console.log("sum = ",sum)

//123 == 1* 2*3 =6

//222 - true
//44 -- true
//68 -- true

//123 false
//765 false