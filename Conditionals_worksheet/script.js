// Elimarie Morales Santiago
// October 14, 2013(in mpg)s

// Conditionals Worksheet

// Check the Login

var uName= "John Doe"; // user name input
var passW= "12345";
var userName= prompt("Enter username");
var passInput= prompt("Please enter your password");

if (uName === userName){ //if this condition is true
    alert("Welcome"+" "+  userName +"!");
}else{
    alert("User not found. Try again."); // if this condition is false alert user
}
if (uName != passW){
    alert("Password does not match our record");
}



