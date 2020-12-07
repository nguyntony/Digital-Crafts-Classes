const http = require("http")
const express = require("express")
const app = express()
const server = http.createServer(app)
const port = 3340

app.get("/", (req, res) => {
    res.send("hello express")
})

server.listen(port, () => console.log("up and ready"))