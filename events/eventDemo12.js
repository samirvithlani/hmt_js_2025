const filterData = () => {
  const tableHeader = document.getElementsByTagName("th");
  console.log(tableHeader);
  var index = -1;

  for (let i = 0; i < tableHeader.length; i++) {
    if (tableHeader[i].innerText == "AGE") {
      tableHeader[i].style.background = "red";
      index = i //AGE column index..
    }
  }
  console.log("index....",index)

  const tr = document.getElementsByTagName("tr")
  for(let i=0;i<tr.length;i++){
    var column = tr[i].getElementsByTagName("td")  //id

    //console.log("td...",column)
    if(column[index]){
        column[index].style.background="red"
    }
  }
};
