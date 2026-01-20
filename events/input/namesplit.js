var name1;
const splitName = (event) => {
  var name = document.getElementById("name").value;
  name1 = name;
};

const splitName1 = (event) => {
  console.log(name1);
  const fullName = name1.split(" ");
  // console.log("firstName = ",fullName[0])
  // console.log("lastName = ",fullName[1])

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");

  firstName.innerHTML = "FirstName = " + fullName[0];
  lastName.innerHTML = "Last Name =" + fullName[1];
};
