var no =123; //3
//123 / 10 -> 12 count+1
//12 / 10 -->1   count+2
//1/10  -->0     count+

//var no=4532 //4
//4532/10 - 453  cnt1
//453//10 - 45   cnt2
//45/10 -4     3
//4/10 --0     4

//Math.floor(10.20) //10

var count=0
//123>0 True
//12>0 True
//1>0 True
//0>0 False
while(no>0){
    
    //123/10 12
    //12/10 = 1
    //1/10 =0
    no = Math.floor(no /10)
    //console.log(no)
    count++; //1,2,3
}
console.log("count...",count)
