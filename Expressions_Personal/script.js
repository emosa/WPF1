// Elimarie Morales Santiago
// October 9, 2013

// Assignment: Expressions

// How much water my fish tank holds?

var depthInches= 28; //distance from front to back
var widhtInches= 14; // Distance across the front
var heightInches= 18; // Distance from top to bottom

var total= depthInches * widhtInches * heightInches; // Multiplying total measurements

var gallonsub= total * 0.00433; // Calculating total measurements multiplied by cubic inches 0.00433 equal to 30.55248 that is approximately 30.55 gallons


var watergallon= "My fish tank holds" +" "+ gallonsub + " " + "gallons of water.";

console.log(watergallon);