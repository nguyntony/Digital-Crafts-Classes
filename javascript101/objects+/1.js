// Instance an object of any name of your choice.
let a = new String("this is a string?")
console.log(typeof a)


// Using the mdn documents about Array, check to see if that instance is an array.
// create an array and check to see if it is an array as well.
console.log(Array.isArray(a)) // false

let b = [1, 2, 3]
console.log(Array.isArray(b)) // true


// Using the documents join the array together and console.log the results.
// b.push(a)
// console.log(b)

// let c = Array.of(a, b)
// console.log(c)

console.log(b.join())