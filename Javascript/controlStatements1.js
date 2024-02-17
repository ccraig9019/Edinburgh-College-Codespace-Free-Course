let firstNumber = prompt("Please enter a number.") //Asking user for first number and declaring it as a variable

let secondNumber = prompt("Please enter a number.")  //Asking user for second number and declaring it as a variable
 
let thirdNumber = prompt("Please enter a number.")  //Asking user for third number and declaring it as a variable

//if/else statement to evaluate whether the user's numbers are the same or not
if (firstNumber == secondNumber && secondNumber == thirdNumber) {
	alert("All numbers are equal")
}
else if (firstNumber != secondNumber && secondNumber != thirdNumber && thirdNumber != firstNumber) {
	alert("All numbers are different")
}
else {
	alert("Neither all are equal or different")
}