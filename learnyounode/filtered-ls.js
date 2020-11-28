const { dir } = require("console");
const fs = require("fs");
const path = require("path");
const dirPath = process.argv[2]
const ext = "." + process.argv[3]

fs.readdir(dirPath, (err, list) => {
    if (err) throw err;
    // let fileNames = [];

    for (let file of list) {
        if (path.extname(file) === ext) {
            console.log(file)
        }
    }
})