// Elimarie Morales Santiago
// October 17, 2013

// Assignment: Conditionals

// Gucci jacket purchase

var gucciJacket= 1600; // cost of jacket
var bankSavings= 1500; // bank savings
var cashMoney= 1400; // cash money in pockets


if (gucciJacket <= bankSavings){
    alert("Enjoy your new jacket!"); // if the jacket is cost is greater than or equal to bank savings
}
else if (cashMoney < gucciJacket){
    alert("Choose a cheaper jacket!");// if cash is less than jacket cost, can choose a cheaper jacket
}
else{
    alert("Sorry maybe another time"); // if it doesn't have enough money another time will be
}
