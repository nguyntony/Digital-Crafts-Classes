const http = require("http");
const express = require("express");
const port = 3340;
const host = "localhost"; // same as '127.0.0.1'

const app = express();
const server = http.createServer(app);

const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer); // registers a new view engine
app.set("views", "templates"); // what dir do you want it to look in?
app.set("view engine", "html"); // this is the default file, html

app.get("/", (req, res) => {
    // res.send("helllo");
    res.render("home");
});

app.get("words/:word", (req, res) => {
    const { word } = req.params;
    res.render("greet", {
        locals: {
            word,
        },
    });
});

const people = {
    chris: "dad",
    dylanATL: "dylan of atlanta",
    dylanTampa: "dylan of tampa",
    jeremy: "super algo master",
    liz: "mom"
}

app.get("/people", (req, res) => {
    res.render('dc-list', {
        locals: {
            people: Object.keys(people)
        }
    })
})

server.listen(port, () => console.log(`${host}:${port} is up`));
