// Create an array with 4 numbers and use that array and destructuring for the following operations.
// Assign the value of variables a,b,c,d to the values in the array.
// Assign only the 2nd item's value to a variable named second.
// Assign the value of the first to a variable named first and the rest to a variable named rest.

numArr = [1, 10, 20, 25]

let [a, b, c, d] = numArr;

let [, second, ,] = numArr;
console.log(second)

let [first, ...rest] = numArr;
console.log(first)
console.log(rest)

let attempt = [first, second] = [1, 2, 3, 4, 5]
console.log(first)
console.log(second)
console.log(attempt)

let i = j = k = 100
console.log(i)

