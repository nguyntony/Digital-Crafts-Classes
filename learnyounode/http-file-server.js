const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const file = process.argv[3]

const server = http.createServer((req, res) => {
    const stream = fs.createReadStream(file, { encoding: 'utf8' })
    stream.pipe(res);
})

server.listen(port)

// a stream is a type of object in node and you can think of it like a flow of data and you can pipe the stream to other functions and here we are using to flow the data so that we can serve it on the server.