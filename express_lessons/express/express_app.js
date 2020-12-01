const http = require("http")
const express = require("express")
const port = 4430
const app = express()
const server = http.createServer(app)
const htmlContent = require("./modules/htmlContent")



let title;
let heading;
let additional;
let people = require("./modules/people.json")



app.get(["/", "/home"], (req, res) => {
    title = `Home`
    heading = `This is the homepage`
    additional = `Welcome to my home page, you are blessed to have found this`
    let wrapper = htmlContent({ title, heading, additional })
    res.send(wrapper)
})

app.get("/about", (req, res) => {
    title = `About`
    heading = `This is the about page.`
    additional = `I will not share any details of my fiber with you.`
    let wrapper = htmlContent({ title, heading, additional })
    res.send(wrapper)
})

app.get("/contact", (req, res) => {
    title = `Contact`
    heading = `This is the contact page.`
    additional = `idk who you trying to contact`
    let wrapper = htmlContent({ title, heading, additional })
    res.send(wrapper)
})

// app.get("/favicon.ico", serveFiles)

app.get("/api/people", (req, res) => {
    // title = `People`
    // heading = `People database`
    // additional = JSON.stringify(people)
    // let wrapper = htmlContent({ title, heading, additional })
    // res.send(wrapper)

    // (above) so what I did here is being extra, what all you really need to do is res.send(people) vs assigning this to additional and stringifying it.

    res.send(people)
})

app.get("/api/people/gender/:gender", (req, res) => {
    const { gender } = req.params
    let filteredPeople = people.filter(person => person.gender == gender)
    res.send({ gender, filteredPeople })
})

app.get("/api/people/email/:email", (req, res) => {
    const { email } = req.params
    let filteredPeople = people.find(person => person.email == email)
    res.send({ email, filteredPeople })
})


app.get("*", (req, res) => {
    title = `NO`
    heading = `This is a 404 page. No.`
    additional = `stop searching.`
    let wrapper = htmlContent({ title, heading, additional })
    res.send(wrapper)
})

server.listen(port, () => console.log(`${port} is ready.`))

