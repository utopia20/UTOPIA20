function validate() {
  var name = document.getElementById("name").value;
  var college = document.getElementById("college").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var others = document.getElementById("others").value;

  var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var numReg = /^\d{10}$/;

  if (name != "") {
    if (college != "") {
      if (email.match(emailReg)) {
        if (number.match(numReg)) {
          if (others != "") {
            return true;
          } else {
            alert("Other Member Names and Contact Number cannot be blank!");
            return false;
          }
        } else {
          alert("Number must be of 10 digits!");
          return false;
        }
      } else {
        alert("Email ID must be a valid one!");
        return false;
      }
    } else {
      alert("College Name cannot be blank!");
      return false;
    }
  } else {
    alert("Name cannot be blank!");
    return false;
  }
}
