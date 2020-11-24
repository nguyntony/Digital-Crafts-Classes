const fs = require("fs");

const serveFile = (req, res, filename) => {
    fs.readFile("." + filename, (err, data) => {
        if (err) {
            res.writeHead(404)
            res.end()
        }
        res.writeHead(200);
        res.end(data)
    })
}

module.exports = serveFile;

//in this file we are creating a universal or resuable piece of code that is able to take the favicon and css and link it with the html that we have created from the backend. As you can see the function takes a filename and returns the filename with the .

// if you look on add_css.js you will see that we can the function here and that the req.url will pass the filename that we wish which will be the styles.css and the favicon.ico 