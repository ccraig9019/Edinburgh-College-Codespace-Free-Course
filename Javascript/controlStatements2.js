let firstNumber = prompt("Please enter a number.") //Asking user for first number and declaring it as a variable

let secondNumber = prompt("Please enter a number.")  //Asking user for second number and declaring it as a variable
 
let thirdNumber = prompt("Please enter a number.")  //Asking user for third number and declaring it as a variable

switch (firstNumber < secondNumber && secondNumber < thirdNumber) {
	case true:
	alert("Increasing order");
	break;
	
	case false: 
	if (firstNumber > secondNumber && secondNumber > thirdNumber) {
		alert("Decreasing order");
	}
	else {
	alert("Neither increasing or decreasing order");
	}
	break;
}

