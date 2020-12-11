const http = require("http")
const express = require("express")
const app = express()

const PORT = 3340
const host = "localhost"

const server = http.createServer(app)
const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const coffeeDB = require("./json/coffee.json")
const { rsort } = require("semver")

app.get("/", (req, res) => {
    // shows the total number of orders 
    const totalOrders = coffeeDB.length


    // the total amount spent
    const totalAmount = coffeeDB.reduce((acc, order) => {
        return acc + order.cost
    }, 0)

    res.send(`There is ${totalOrders} orders.<br>The total amount spent is ${totalAmount.toFixed(2)}`)
})

app.get("/orders", (req, res) => {
    // lists the kinds of coffee orders 
    const keys = [...new Set(coffeeDB.map(order => order.order))]
    const newDB = []

    for (let key of keys) {
        const totalAmount = coffeeDB.filter(order => order.order === key).reduce((acc, order) => {
            return acc + order.cost
        }, 0)

        const obj = { key, totalAmount }
        newDB.push(obj)
    }

    res.render("order", {
        locals: {
            all: newDB
        }
    })
})

app.get("/orders/:kind", (req, res) => {
    let { kind } = req.params
    kind = kind.replace("%20", " ")
    const orders = coffeeDB.filter(order => order.order === kind)

    if (orders) {
        res.render("orderKind", {
            locals: {
                orders
            }
        })
    }
})

server.listen(PORT, () => console.log(`${host}://${PORT}`))