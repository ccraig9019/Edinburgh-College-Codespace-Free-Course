

const numbers = [10, 2, 3, 4, 7];

function displayArray(a) { //declaring function to output array
	return("The content of the array is: [" + a + "]")
}


function showMax(a){ //declaring function to determine max value in array
	var sorted = a.sort(function(a, b){return a-b}); //had to add the compare function so that the sort method would arrange the array in ascending order
	var length = sorted.length; //determining length of array
	return(sorted[length-1]); //returning value of last index in array
	}


console.log(displayArray(numbers))

console.log("The max value in the array is " + showMax(numbers))
	
	

	



	