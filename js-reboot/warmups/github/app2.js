const http = require("http");
const express = require("express")
const app = express()
const port = 4430
const server = http.createServer(app)

app.get("/", (req, res) => {
    res.send(`<h1>hello app2</h1>`)
})

app.get("/hello/:name", (req, res) => {
    const { name } = req.params
    res.send(`hello ${name}, you are on ${port}, ${req.url}`)
})

server.listen(port, () => console.log(`${port} is ready.`))