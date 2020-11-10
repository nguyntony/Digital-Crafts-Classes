// Create an array of letters and create an array of numbers.

// Using the spread operator create an array of the values of the letters first then the numbers.
// Make another array with the numbers first.

let letters = ["a", "b", "c", "d", "e", "f"]
let numbers = [1, 2, 3, 4, 5, 6]

let lettersFirst = [...letters, ...numbers]
console.log(lettersFirst)

let numbersFirst = [...numbers, ...letters]
console.log(numbersFirst)