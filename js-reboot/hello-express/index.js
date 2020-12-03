const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);
const port = 3001


app.get("/", (req, res) => {
    res.send("Hello Express")
})






server.listen(port, () => console.log(`port:${port} is ready`));
// right here listen technically takes 3 arguments but we only pass it two, what is happening is that the second argument can either be a string or callback fn, if it is a string, .listen() understands that the user wants the provided strong to be the url path (locahhost) but if it is not given, .listen() understands that localhost will be the default. so you may see server.listen(port, 'localhost', callbackfn)