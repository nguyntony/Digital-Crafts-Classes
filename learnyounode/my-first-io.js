const fs = require("fs");

let testFile = fs.readFileSync(process.argv[2])
    .toString()
    .split("\n");

console.log(testFile.length - 1)