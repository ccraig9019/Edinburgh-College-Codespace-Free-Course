function factorialise(n) {
	if (n < 0) { //giving a return condition for a negative number
		return "undefined";
	};
	
	if (n == 0) { //giving a return condition for 0
		return 0;
	};
	
	for (var i = n-1; i >= 1; i--) { //using a for loop to iterate through values less than n
	n = n*i;
	};
	return n; //return n after the for loop
};
	
let userInput = prompt("Please enter a number to be factorialised."	)

alert(factorialise(userInput));