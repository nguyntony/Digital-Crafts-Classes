const http = require("http")
const namesJson = [
    {
        firstName: "rick",
        lastName: "sanchez",
        email: "rick@mail.com",
    },
    {
        firstName: "morty",
        lastName: "smith",
        email: "morty@mail.com",
    },
    {
        firstName: "summer",
        lastName: "smith",
        email: "summer@mail.com",
    },
    {
        firstName: "beth",
        lastName: "smith",
        email: "beth@mail.com",
    },
    {
        firstName: "jerry",
        lastName: "smith",
        email: "jerry@mail.com",
    },
];

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    })
    res.write(JSON.stringify(namesJson))
    res.end()
})

server.listen(3344, () => {
    console.log("3344 is rdy")
})