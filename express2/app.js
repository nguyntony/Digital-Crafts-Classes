const http = require("http")
const express = require("express")
const port = 4431
const app = express()
const server = http.createServer(app)

let obj = { people: ["tony", "tyler", "michelle"], places: ["ga", "ca"], things: ["phone", "wallet"] }


const currentTime = (req, res) => {
    let currTime = new Date()
    req.currTime = currTime
    console.log(req.currTime)
    res.send()
}

app.get("/", currentTime)


const typeChecker = (req, res) => {
    const { type } = req.params
    if (obj.hasOwnProperty(type)) return res.send(`I think this works you are on ${type}: ${obj[type]}`)

    res.send(`I don't think ${type} matches any of the keys/queries of obj.`)
}

app.get("/api/:type", typeChecker)

server.listen(port, () => console.log("ready"))