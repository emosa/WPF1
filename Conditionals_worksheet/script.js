// Elimarie Morales Santiago
// October 15, 2013

// Conditionals Worksheet

// Check the Login

var uName= "J"; // user name input
var passW= "1"; // user input password
var userName= prompt("Enter username");
var passInput= prompt("Please enter your password");

if (uName == userName)
    { //if this condition is true
    alert("Welcome"+" "+  userName +"!");

    if (passInput == passW)
        {
      //  alert("Password does match our record"); //
        }
    else {
        alert("Password does not match our record");
         // alert if password don't match
        }
    }
else{
    alert("User not found. Try again.");
    // if this condition is false alert user
    }




