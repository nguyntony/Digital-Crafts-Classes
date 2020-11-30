const fs = require("fs")


const serveFiles = (req, res, filename) => {
    fs.readFile(`.${filename}`, (err, data) => {
        if (err) return res.send(err)
        res.send(data)
    })
}

module.exports = serveFiles;