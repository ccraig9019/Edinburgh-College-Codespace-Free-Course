const numbers = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49]

const sorted = numbers.sort() //creating a new array whicn is the given array but sorted 

console.log(sorted) //for debugging purposes

let length = (numbers.length - 1) //getting the index of the highest value in the sorted array

alert("Original Array: [" + numbers + "]" + "\n\nMaximum value for the above array = " + sorted[length] + "\n\nMinimum value for the above array = " + sorted[0])

