const http = require('http')
const map = require('through2-map')
const port = process.argv[2]

const server = http.createServer((req, res) => {
    if (req.method !== 'POST') return res.end("this server only accepts post")

    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);

    console.log(req.url)
    console.log(port)
})

server.listen(port)

// important reminder that req is a request object and it has properties, etc. that we can access. for this exercise we want to make sure that request object is method post

// we imported a through2-map module, it loooks like we are using this module similar to how we would use .map() on arrays.