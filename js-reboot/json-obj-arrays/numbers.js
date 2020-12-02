// how to import a json file into a js file.
const postLikes = require("./json/numbers.json")
console.log(postLikes)


// to check if something is an array or not you can use Array.isArray()
if (Array.isArray(postLikes)) {
    console.log("yes it is an array")
} else {
    console.log("sorry no")
}
// what does this tell us?
// so when you import a json file it will convert the json file to what it needs to be in js


// is the first index of your array odd?
if (postLikes[0] % 2) {         // if this expression results in a 0, it means 2 things, that yes the number is even but also 0 evaluates as a falsey
    console.log(`${postLikes[0]} is an odd number.`)
} else {
    console.log(`${postLikes[0]} is an even number.`)
}


// put it in a function 
const isEven = num => !Boolean(num % 2)         // what is this expression saying, so first we will get the modulo of a number and it will return 0 or 1 we will then turn that to a boolean and then it will be either true or false. if it is an even num then the modulo will be 0 which will evaulate as false so we want to turn that to the opposite with the !; so if a number is off 
console.log(isEven(0))


const isEven2 = num => (num % 2) ? "it is an odd number" : "it is an even number"
console.log(isEven2(0))


// filtering even numbers 
const evenArr = postLikes.filter(isEven)
console.log(evenArr)
// and to see how many values in the array you could use .length
console.log(evenArr.length)


// how many post have over 20000 likes
const over20Thousand = postLikes.filter(eaPost => eaPost > 20000)
console.log(`${over20Thousand.length} posts are over 20,000`)


