const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);
const port = 3001


app.get("/", (req, res) => {
    res.send("Hello Express")
})






server.listen(port, () => console.log(`port:${port} is ready`))