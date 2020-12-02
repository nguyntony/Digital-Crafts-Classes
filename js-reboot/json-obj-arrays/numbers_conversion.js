// turning an array of strings to an array of numbers; supposed someone made a mistake and we are supposed to be receiving an array of numbers but instead what we have is an array of strings that are numbers (ie instead of 200 it's "200")

const likesAsStrings = require("./json/numbers-as-strings.json")

// so what we will do here is that we will use .map() to make a new array and we are able to pass each value of the likesAsStrings array and turn each one into a number using parseInt()

const strToNum = likesAsStrings.map(num => parseInt(num, 10))       // with parseInt here, we pass 10 as the second argument and it is standard practice to do this bc it will ensure to return a number that humans can understand instead of like some sort of other counting system like hexidecimal???
console.log(strToNum)