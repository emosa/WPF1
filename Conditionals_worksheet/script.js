// Elimarie Morales Santiago
// October 13, 2013(in mpg)s

// Conditionals Worksheet

// Last Chance for Gas!

var carGasMpg= 28; // Gas miles per gallon
var gasTankReading= 0.050;// Half tank
var gasTankGallons= 20;// Gas tank gallon capacity

if(carGasMpg * gasTankReading > 200){ // if the gas per gallon multiplied by the tank reading (half tank) is greater than 200 miles
    console.log("Yes, you can make it without stopping for gas!"); // print out console
}else if (carGasMpg * gasTankReading < 200){ // if the gas per gallon multiplied by the tank reading (half tank) is less than 200 miles
    console.log("You only have" + " " + gasTankGallons + " "+ "gallons of gas in your tank, better get gas now while you can!"); // print out console
}



