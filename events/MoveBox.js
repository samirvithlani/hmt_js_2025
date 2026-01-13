const moveBox1 = (event) => {
  var xaxis = event.clientX;
  var yaxis = event.clientY;

  console.log(xaxis);
  console.log(yaxis);

  const box = document.getElementById("box"); //<div>
  box.style.left = xaxis + "px";
  box.style.top = yaxis + "px";
};
