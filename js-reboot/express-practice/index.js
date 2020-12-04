const http = require("http")
const express = require("express")
const app = express()
const port = 3340;
const localhost = "localhost"
const server = http.createServer(app)

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send(`
    <head>
    <link rel="stylesheet" href="./styles.css" />
    </head>

    <h1>Welcome to my page!</h1>
    <img
    src="https://i.pinimg.com/originals/f7/f9/56/f7f956f1efb231dff3672c7e3049e2ad.png"
    alt="zuko"
    />
    <br>  
    <a href="/pets">My pets!</a>
    <br>
    <a href="/hero.png">Candid Profile Pic</a>
    `)
})

app.get("/pets", (req, res) => {
    res.send(`
    <head>
    <link rel="stylesheet" href="./styles.css" />
    </head>

    <h1>Pets</h1>
    <p>Here's a list of my pets</p>
    <ul>
        <li><a href="/pets/taro">Taro</a></li>
        <li><a href="/pets/mochi">Mochi</a></li>
    </ul>
    <a href="/">Home</a>
    `)
})

app.get("/pets/:petName", (req, res) => {
    const { petName } = req.params;

    res.send(`
    <head>
    <link rel="stylesheet" href="./styles.css" />
    </head>
    
    <h2>Woof!</h2>
    <p 
    style=
    "border: 1px solid black"
    >go away, this is my page<br>
        - ${petName}
    </p>
    <a href="/pets">going away now</a>
    
    `)
})

server.listen(port, localhost, () => console.log(`${port} is ready`))