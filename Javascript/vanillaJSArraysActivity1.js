const numbers = [1,2,3,4,5,6,7,8,9,10]

let length = numbers.length //setting the number of indices in the array to be used as a limit for the loop

let sum = 0 //initialising variable to be used in the loop

for (let i = 0; i < length; i++) { //setting iterator to begin at the first index and end on the last
	sum += numbers[i]
	console.log(sum) //for debugging purposes
}

alert("The sum is " + sum)