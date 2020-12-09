const http = require("http")
const express = require("express")
const app = express()

const PORT = 3340;
const host = "localhost"
const server = http.createServer(app)

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const morgan = require("morgan")
const logger = morgan("tiny")
const helmet = require("helmet")

const sailorScouts = require("./templates/db")


app.use(logger)
app.use(helmet())

app.use(express.static("public"))


app.get("/", (req, res) => {
    res.render("home", {
        partials: {
            footer: "/partials/footer"
        }
    })
})

app.get("/sailorscouts", (req, res) => {
    const sailorNames = sailorScouts.map(ss => ss.name)
    console.log(sailorNames)
    res.render("sailorScouts", {
        locals: {
            sailorNames
        }
    })
})

app.get("/sailorscouts/:name", (req, res) => {
    const { name } = req.params;
    const sailorScout = sailorScouts.find(ss => ss.name === name)

    if (sailorScout) {
        res.render("sailorBio", {
            locals: {
                name: sailorScout.name,
                intro: sailorScout.intro,
                photo: sailorScout.name.replace(" ", "")
            }
        })
    }
})


server.listen(PORT, () => console.log(`${host}://${PORT} READY`))