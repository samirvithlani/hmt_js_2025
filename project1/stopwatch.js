
let second = 0
let minute = 0
let hour = 0
let timer = null

function updateDisplay (){
 
    let h =hour<10?"0"+hour : hour
    let m = minute<10?"0"+minute :minute
    let s = second<10?"0"+second : second

    document.getElementById("display").innerText=`${h}:${m}:${s}`
}

const startWatch = ()=>{

    if(timer!=null) return;

    timer = setInterval(()=>{

        second++
        if(second==60){
            second=0
            minute++;
        }
        if(minute==60){
            minute=0
            hour++
        }

        updateDisplay()
    },1000)


}
const stopWatch = ()=>{

    clearInterval(timer)
    timer=null;
}
const resetWatch = ()=>{

    stopWatch()
    second=0
    minute=0
    hour=0
    updateDisplay()
}