// Elimarie Morales Santiago
// October 20, 2013

// Functions - Variable Scope

var width = 5; //used outside the function

function calcArea(){//function definition
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

calcArea(); //invocation or call of function 
