// Elimarie Morales Santiago
// October 16, 2013

// Assignment: Conditionals

// Check item stock inventory before purchasing

var itemGildanShirts; //variable for shirts
var shirtStock= prompt("Please check our stock before placing your order. \n How many shirts do you need?"); // prompt message for customer. If the customer needs more than 400 shirts he needs to call to verify stock.

itemGildanShirts= (shirtStock < 400)? "Available in stock. Please proceed with your order": "Call 1-877-571-0000 to verify stock and to place your order.";

//conditionals with ternaries

alert(itemGildanShirts); // alert for customers depending on customers choice