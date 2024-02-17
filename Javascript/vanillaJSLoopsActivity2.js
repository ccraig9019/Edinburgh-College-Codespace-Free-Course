let userNumber = prompt("Enter a number") //getting a number from user

let n = 10 //variable that will act as the limit for the loop

for (let i = 1; i <= n; i++) { //creating for loop
	let result = (i*userNumber) //multiplying the numbers and storing it to a variable
	console.log(userNumber + " x " + i + " = " + result) //logging the equation to console
}

