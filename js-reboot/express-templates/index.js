const http = require("http");
const express = require("express");
const port = 3340;
const host = "localhost"; // same as '127.0.0.1'

const app = express();
const server = http.createServer(app);

const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer); // registers the html type.
app.set("views", "templates"); // what dir do you want it to look in?
app.set("view engine", "html"); // this is the default file, html

app.get("/", (req, res) => {
    // res.send("helllo");
    res.render("home");
});

app.get("/:word", (req, res) => {
    const { word } = req.params;
    res.render("greet", {
        locals: {
            word,
        },
    });
});

server.listen(port, () => console.log(`${host}:${port} is up`));
