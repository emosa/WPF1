// Elimarie Morales Santiago
// October 13, 2013(in mpg)s

// Conditionals Worksheet

// Last Chance for Gas!

var carGasMpg= 28;
var gasTankReading= 0.050;
var gasTankGallons= 20;


if(carGasMpg * gasTankReading > 200){
    console.log("Yes, you can make it without stopping for gas!");
}else if (carGasMpg * gasTankReading < 200){
    console.log("You only have" + " " + gasTankGallons + " "+ "gallons of gas in your tank, better get gas now while you can!");
}



