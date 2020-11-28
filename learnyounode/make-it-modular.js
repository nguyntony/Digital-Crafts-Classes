const filterFiles = require("./mymodule");
const folder = process.argv[2];
const extension = process.argv[3];

filterFiles(folder, extension, (err, filteredList) => {
    if (err) {
        return console.error(`there was an error: ${err}`)
    }
    for (let file of filteredList) {
        console.log(file)
    }
})