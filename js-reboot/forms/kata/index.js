const http = require("http");
const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();
const server = http.createServer(app);

const PORT = 3000;
const HOST = "0.0.0.0";

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

const logger = morgan("tiny");

let db = [
    {
        name: "Sailor Moon",
        likes: "sleeping",
    },
    {
        name: "Sailor Mercury",
        likes: "learning",
    },
    {
        name: "Sailor Mars",
        likes: "archery",
    },
    {
        name: "Sailor Jupiter",
        likes: "hiking",
    },
    {
        name: "Sailor Venus",
        likes: "shopping",
    },
];

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    // res.send("hello world")
    res.render("home", {
        locals: {
            homeMessage: "This is my home!",
        },
    });
});

app.get("/items", (req, res) => {
    res.render("items", {
        locals: {
            db,
        },
    });
});

app.get("/items/:id", (req, res) => {
    const { id } = req.params;
    const target = db[id];

    res.json(target);
});

app.get("/create", (req, res) => {
    res.render("form")
})

let userDB = []

app.post("/create", (req, res) => {
    const { firstName, lastName, favColor } = req.body
    let person = {
        firstName,
        lastName,
        favColor
    }
    userDB.push(person)
    console.log(userDB)
    // res.send("thank you")
    res.redirect("/thank-you")
})

app.get("/thank-you", (req, res) => {
    res.render("thankYou")
})

server.listen(PORT, HOST, () => {
    console.log(`Listening at`, HOST, PORT);
});
