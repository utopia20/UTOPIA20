function validate() {
  var name = document.getElementById("name").value;
  var bandName = document.getElementById("bandName").value;
  var members = document.getElementById("members").value;
  var college = document.getElementById("college").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var others = document.getElementById("others").value;

  var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var numReg = /^\d{10}$/;
  var membersReg = /^[4-7]$/;

  if (bandName != "") {
    if (college != "") {
      if (members.match(membersReg)) {
        if (name != "") {
          if (email.match(emailReg)) {
            if (number.match(numReg)) {
              if (others != "") {
                return true;
              } else {
                alert(
                  "Other Member Names and Contact Numbers Must Be Specified!"
                );
                return false;
              }
            } else {
              alert("Number Must Be of 10 Digits!");
              return false;
            }
          } else {
            alert("Please Enter A Valid Email ID!");
            return false;
          }
        } else {
          alert("Team Member 1 Name Cannot Be Empty!");
          return false;
        }
      } else {
        alert("Number of Members Must Be Within 4 - 7");
        return false;
      }
    } else {
      alert("College Name Cannot Be Empty!");
      return false;
    }
  } else {
    alert("Band Name Cannot Be Empty!");
    return false;
  }
}
