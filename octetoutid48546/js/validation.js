function validate() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var college = document.getElementById("college").value;
  var number = document.getElementById("number").value;

  var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var numReg = /^\d{10}$/;

  if (name != "") {
    if (college != "") {
      if (email.match(emailReg)) {
        if (number.match(numReg)) {
          if (
            document.getElementById("solo").selected ||
            document.getElementById("duo").selected
          ) {
            return true;
          } else {
            alert("Atleast One Option Must Be Selected!");
            return false;
          }
        } else {
          alert("Number Must Be of 10 Digits!");
          return false;
        }
      } else {
        alert("Email ID Must Be A Valid One!");
        return false;
      }
    } else {
      alert("College Name Cannot Be Empty!");
      return false;
    }
  } else {
    alert("Name Cannot Be Empty!");
    return false;
  }
}
