const { captureRejectionSymbol } = require("events");
const fs = require("fs");
const { type } = require("os");

fs.readFile("fs_test_file.txt", "utf8", (err, data) => {
    if (err) throw err;     //if an error were to occur this is something that we can do so that we can see the error.
    console.log("this is the first exercise:")
    console.log(data)

    // we can see what the data is
    console.log(typeof data)
    console.log("\n\n")
})


fs.readFile("data.json", "utf8", (err, data) => {
    if (err) throw err;
    console.log("this is using a callback fn:")
    let outputData = JSON.parse(data)
    // outputData.forEach((person) => console.log(`${person.name} is ${person.age} years old!`))
    // console.log("\n\n")
    for (person of outputData) {
        console.log(`${person.name} is ${person.age} years old!`)
    }
})

let data = fs.readFileSync("data.json", "utf8")
let dataArr = JSON.parse(data)
console.log("this is using readFileSync:")
dataArr.forEach((person) => console.log(`${person.name} is ${person.age} years old!`))
console.log("\n\n")