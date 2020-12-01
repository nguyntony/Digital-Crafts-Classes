const http = require("http")
const express = require("express")
const app = express()
const helmet = require("helmet")
const server = http.createServer(app)
const port = 4432
const htmlContent = require("./modules/htmlContent")


app.use(helmet());  // we are importing this helmet module and this middleware is used as security measures to keep your stuff safe.

// using the express static right here, it is taking files from the public folder and is hosting all of the files there. so right now by using this, my server is hosting the html file in there and it is connecting my stylesheet because I have the link ref in the head tag of my html
app.use(express.static("public"))


// this url path will be hosting another webpage that I wrote it js and it is also linking to the stylesheet in the public folder which is written with the link tag into the head tag in that file. 
app.get("/other", (req, res) => {
    let title = "homepage"
    let heading = "this is the header"

    res.send(htmlContent({ title, heading }))
})




server.listen(port, () => console.log("port is ready"))