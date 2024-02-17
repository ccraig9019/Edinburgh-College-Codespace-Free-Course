const numbers = [20,30,25,35,-16,60,-100]

let length = numbers.length //setting the number of indices in the array to be used as a limit for the loop

let sum = 0 //initialising variable to be used in the loop

let average = 0 //initialising average variable to be used in the loop

for (let i = 0; i < length; i++) { //setting iterator to begin at the first index and end on the last
	sum += numbers[i]
	console.log(sum) //check for debugging
	average = (sum / length) //calculating the average
}

alert("Average value of the array elements is " + average.toFixed(1)) //calling the average variable and trimming it to 1 decimal place