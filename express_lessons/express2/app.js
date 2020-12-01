const http = require("http")
const express = require("express")
const port = 4431
const app = express()
const server = http.createServer(app)
const htmlContent = require("./modules/htmlContent")

const morgan = require("morgan")
const logger = morgan("tiny")

let title;
let heading;


let obj = { people: ["tony", "tyler", "michelle"], places: ["ga", "ca"], things: ["phone", "wallet"] }

app.use(logger)

const currentTime = (req, res, next) => {
    let currTime = new Date()
    req.currTime = currTime
    console.log(req.currTime)
    next()
    res.send()
}

app.use(express.static("public"));

app.get("/", currentTime)


app.get("/", (req, res) => {
    title = `homepage`
    heading = `will this work right now?`
    res.send(htmlContent({ title, heading }))
})


const typeChecker = (req, res) => {
    const { type } = req.params
    if (obj.hasOwnProperty(type)) return res.send(`I think this works you are on ${type}: ${obj[type]}`)

    res.send(`I don't think ${type} matches any of the keys/queries of obj.`)
}

app.get("/api/:type", typeChecker)

server.listen(port, () => console.log("ready"))