const http = require("http");
const express = require("express")
const app = express()
const port = 3340
const server = http.createServer(app)

app.get("/", (req, res) => {
    res.send(`<h1>hello app1</h1>`)
})

app.get("/lift-off", (req, res) => {
    res.send(`<a href="http://localhost:4430/">check out my second app</a>`)
})

app.get("/hello", (req, res) => {
    res.send(`<a href="http://localhost:4430/hello/myself">say hello to yourself</a>`)
})

server.listen(port, () => console.log(`${port} is ready.`))