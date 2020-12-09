const http = require("http");
const express = require("express");
const app = express();
const PORT = 3340;
const server = http.createServer(app);
const morgan = require("morgan");
const logger = morgan("tiny");

app.use(express.static("public"))
// this is how to tell express where your static files will be

app.use(logger);
// app.use a piece of middleware

app.use("/flower", (req, res, next) => {
    req.stuff = "🌼"
    next()
})
// we are using app.use on a particule route /flower, we are declaring a new key/value pair in the request object and then we are sending that to the next middleware on line 23

app.get("/", (req, res) => {
    res.send(`
    <head><link rel="stylesheet" href="/styles.css"></head>
    <h1>middleware lesson</h1>
    `);
});
// here we are linking the styles.css in the head tag of our html

app.get("/flower", (req, res) => {
    res.send(req.stuff)
})

app.get("/flowera", (req, res) => {
    res.send(req.stuff)
})

server.listen(PORT, () => console.log(`${PORT} IS READY`));
