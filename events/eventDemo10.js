const getBOXES = () => {
  //    document.getElementById() //1 element
  const boxes = document.getElementsByClassName("box"); //all elment -->2 ->array
  console.log(boxes);

  //boxes[0].style.background = "blue";
  //   for(let i=0;i<boxes.length;i++){
  //     boxes[i].style.background="blue"
  //   }

  for (let i = 0; i < boxes.length; i++) {
    if(i%2==0){
        boxes[i].style.background="green"
    }
    else{
        boxes[i].style.background="red"
    }
  }
};

//5 box --> click --> even box --> gree -->odd box -->red
