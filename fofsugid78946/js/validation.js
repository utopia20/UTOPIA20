function validate() {
  var name = document.getElementById("name").value;
  var number = document.getElementById("number").value;

  var numReg = /^\d{10}$/;

  if (name != "") {
    if (number.match(numReg)) {
      return true;
    } else {
      alert("Choreographer Contact Number must be of 10 digits!");
      return false;
    }
  } else {
    alert("Choreographer Name Cannot Be Blank !");
    return false;
  }
}
