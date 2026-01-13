const getCoordinates=(event)=>{
    console.log(event)
    const ball = document.getElementById("ball") //<div>
    var ballX = event.clientX;
    var ballY = event.clientY;

    console.log("ballx ",ballX)
    console.log("bally",ballY)

    ball.style.top = "200px"
    ball.style.left= "400px"
    
}