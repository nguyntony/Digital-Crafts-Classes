numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// print the fourth item
console.log(numArray[3])


// concatinate the 6th and 3rd item and print the results.
let added = numArray[2] + numArray[5]
console.log(added)


// add 4 more letters one at a time to the end of the array.
numArray.push(11)
numArray.push(12)
numArray.push(13)
numArray.push(14)


// remove the first item of the array.
numArray.shift()


// join all of the letters together and send the results to the console.
let letterArray = ["t", "o", "n", "y", "t", "o", "n", "y", "a", "b", "a", "b", "c", "d"]

console.log(letterArray.join(''))


// sort the letters
console.log(letterArray.sort().join(''))