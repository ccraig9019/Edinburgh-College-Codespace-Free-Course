function primeCheck(n) {
	if (n <=0) { 
		return "This is not a prime number." //If zero or a negative number is entered, it will be declared "not a prime number" and the function will end
	}
	for (let i = n-1; i > 1; i--) { //loop to iterate through all numbers between 2 and 1 less than the parameter
		var remainder = (n%i); //using the iterator as a divisor, evaluating for the remainder
		console.log(remainder); //for debugging purposes
		if (remainder == 0) { //if any of the remainders are zero, the parameter can be divided by them and is therefore not a prime number
			return "This is not a prime number.";
			continue; //to exit the function once this condition is met once
		}
	}
	return "This is a prime number." //if the parameter always leaves a remainder, the number is prime
}

let userNumber = prompt("Please enter a number. We will tell you if it is a prime number."); //to get a number from the user*/
alert(primeCheck(userNumber)) //passes the user's number into the function and returns the result