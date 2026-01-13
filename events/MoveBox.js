const moveBox1 = (event) => {
  var xaxis = event.clientX;
  var yaxis = event.clientY;

  console.log(xaxis);
  console.log(yaxis);

  const box = document.getElementById("box"); //<div>
  box.style.left = xaxis + "px";
  box.style.top = yaxis + "px";

    var bigboxLeft = 500
    var bigboxRight = 800 // 500 + size(width) = 800
    var bigboxTop = 200
    var bigboxBottom = 500 // 200 + size(height) =500

    if(xaxis>=bigboxLeft && xaxis<=bigboxRight && yaxis >=bigboxTop && yaxis<= bigboxBottom){
        alert("game over...")
    }


};
