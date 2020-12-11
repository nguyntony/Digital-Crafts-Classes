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


const productsDB = require("./json/products.json")
const itemsOnSale = require("./helper/products.js")

app.get("/products", (req, res) => {
    res.render("products", {
        locals: {
            products: productsDB
        },
        partials: {
            head: "/partials/headSetup"
        }
    })
})

app.get("/products/sale", (req, res) => {
    const saleItems = itemsOnSale(productsDB)
    res.render("saleProducts", {
        locals: {
            saleItems
        },
        partials: {
            head: "/partials/headSetup"
        }
    })
})

server.listen(PORT, () => console.log(`${host}://${PORT}`))