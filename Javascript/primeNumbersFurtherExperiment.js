let userNumber = document.getElementById('a');

function primeCheck(n) {
	if (n <=0) { 
		return "This is not a prime number.";
	}
	for (let i = n-1; i > 1; i--) { 
		var remainder = (n%i); 
		console.log(remainder);
		if (remainder == 0) { 
			return "This is not a prime number.";
			continue; 
		}
	}
	return "This is a prime number." ;
}


alert(primeCheck(userNumber)) ;