// Elimarie Morales Santiago
// October 13, 2013

// Condition logic -  else if

//else always require a condition

var kidHeight= 52;
var miheight = 48;
var wParentHeight; 45; //the height of the kid with the parent
// if the child is old, enough, print to console "you can ride!"
// if the kid is over 48 inches height
if(kidHeight > miheight){
    //you can ride
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //you can ride with a parent present
    console.log("You can ride, but only with a parent present")
}else{
    console.log("Sorry kid, you've got some growing to do first!");
}

