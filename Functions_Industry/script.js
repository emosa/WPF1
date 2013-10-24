// Elimarie Morales Santiago
// October 23, 2013

// Assignment: Functions

// Store credit check

var customerCredit = function (creditLine){// function with parameter
     var customerName = prompt("Please enter your name");//prompt for user name
       var monthSalary = prompt("Please enter your Net monthly income:");// prompt for customer salary
    if (creditLine <= monthSalary){// if the customer monthly income is greater than or equal to
        alert(customerName +" "+ "you qualify for a line of credit!");// if the customer is qualified for credit
    }
    else{
        alert("Sorry" +" "+ customerName + " "+"you do not qualify for a line of credit.");// if the customer is not qualified
    }
};
customerCredit(1200);// call function

