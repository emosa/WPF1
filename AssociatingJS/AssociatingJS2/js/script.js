// Elimarie Morales Santiago
// October 8, 2013
// Activity: Expression Worksheet

// Discounts

var originalPrice= 120; // Declare and define original price
var percentDiscount= 20; // Declare and define Percent Discount
var itemDescription= "Yankee Jacket"; // Declare and define product name
var salesTax= 8.875; // Declare and define sales tax

var subTotal= originalPrice-(originalPrice *percentDiscount/100); // Original price minus percent discount for subtotal price

var totalWithTax= salesTax /100* subTotal; // Subtotal with amount of tax calculated

var totalsale= subTotal+totalWithTax; //Subtotal with sales tax

var total= "Your" +" "+ itemDescription +" "+ "was originally $" + originalPrice +" "+ ", but after a" +" "+ percentDiscount + "% discount, it is now $"+ subTotal +" "+ "without tax, and $" + totalsale +" "+ "with tax.";


console.log(total);






