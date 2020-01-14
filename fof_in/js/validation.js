function validate() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var roll = document.getElementById("roll").value;
  var year = document.getElementById("year").value;
  var number = document.getElementById("number").value;

  var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var numReg = /^\d{10}$/;

  if (name != "" && roll != "" && year != "") {
    if (email.match(emailReg)) {
      if (number.match(numReg)) {
        if (
          document.getElementById("slot1").checked ||
          document.getElementById("slot2").checked
        ) {
          return true;
        } else {
          alert("Any one of the slots must be selected!");
          return false;
        }
      } else {
        alert("Phone Number must be of 10 digits!");
        return false;
      }
    } else {
      alert("You must enter a valid Email ID !");
      return false;
    }
  } else {
    alert("Blank Fields are not accepted!");
    return false;
  }
}
