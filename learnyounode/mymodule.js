const { dir } = require("console");
const fs = require("fs");
const path = require("path");
// above, importing modules


// below, creating a function that accepts three arguments. 
// note that the callback function is not defined here it will be defined when we invoke the filterFiles function similar to how we defined a callback function when we call .forEach or .filter. 

// we will define the callback and we are giving it a name here so when we define it in another file it will be anonymous but this function actually references it as callback (the parameter name that we set); that's why we can invoke callback later but also give it parameters later. 


const filterFiles = (folder, extension, callback) => {
    fs.readdir(folder, (err, files) => {
        // the second argument that is given here is a callback function and that is because of hour .readdir works. if there is an error we want to return our callback function and pass it the error. 
        if (err) {
            return callback(err)
            // when we invoke callback here, this is the function that we defined when we first invoke filterFiles. when we defined this callback function we gave it two parameters, one being the error and the other being the list data. if an error were to occur, it will run our callback function with the error parameter. 
        }

        let filteredList = files.filter(f => path.extname(f) === "." + extension);

        // we are filtering the data that we received from when we invoked .readdir, we are doing something to that data then we are passing that our callback function. 

        // and if you look on the "main.js" file you will see that that function will iterate over the list and console log each file. the if statement will only occur if there is an error, making it pass this far means there were no errors and the data is good to go. 

        callback(null, filteredList);
    })
}



module.exports = filterFiles;