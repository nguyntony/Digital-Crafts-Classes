const { dir } = require("console");
const fs = require("fs");
const path = require("path");

const filterFiles = (folder, extension, callback) => {
    fs.readdir(folder, (err, files) => {
        if (err) {
            return callback(err)
        }

        let filteredList = files.filter(f => path.extname(f) === "." + ext);

        callback(null, filteredList);
    })
}

module.exports = filterFiles;