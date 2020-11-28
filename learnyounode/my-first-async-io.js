const fs = require("fs");

fs.readFile(process.argv[2], "utf8", (err, data) => {
    if (err) throw err;
    let numberLines = data.split("\n")
    console.log(numberLines.length - 1)
})