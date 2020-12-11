// # 1. Colors

// Use the `colors.json` file for this exercise.

// Write a function that accepts an array as an argument and returns a new array that contains values matching `'orange'`.

// Modify your array so that it accepts a String as the second argument. Instead of returning an array that only contains `'orange'` values, return an array of values that match the String argument. 
const colorsDB = require("./json/colors.json")
console.log(colorsDB)

const findOrange = (arr) => {
    return arr.filter(color => color === "orange")
}

const orangeArr = findOrange(colorsDB)
console.log(orangeArr)


const findColor = (arr, targetColor) => {
    targetColor = targetColor.toLowerCase()
    let target = arr.filter(color => color === targetColor)

    if (target.length === 0) {
        return `Sorry, ${targetColor} is not in this array.`
    } else {
        return target
    }
}

const redFilter = findColor(colorsDB, "red")
console.log(redFilter)

const mintFilter = findColor(colorsDB, "mint")
console.log(mintFilter)