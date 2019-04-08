//variable assignments for user name and operands
var userName = window.prompt("Enter your name.");
document.getElementById("greeting").innerHTML += userName + "!";

var num1 = parseInt(window.prompt("Enter a number"));
var num2 = parseInt(window.prompt("Enter another number"));

//variable assignments for operations on given operands
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var remainder = num1 % num2;

//display results of operations
var numberString = num1 + " and " + num2 + " is " 
document.getElementById("addition").innerHTML = "The sum of " + numberString + sum;
document.getElementById("subtraction").innerHTML = "The difference between " + numberString + difference;
document.getElementById("multiplication").innerHTML = "The product of " + numberString + product;
document.getElementById("division").innerHTML = "The quotient of " + numberString + quotient;
document.getElementById("modulus").innerHTML = "The modulus of " + numberString + remainder;
