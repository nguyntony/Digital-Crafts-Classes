const net = require("net")
const moment = require("moment")
const port = process.argv[2]

const server = net.createServer(socket => {
    const time = moment().format("YYYY-MM-DD HH:mm")
    socket.write(time);
    socket.end("\n")
})

server.listen(port)


// importing the net module to create our server, the set up is very similar to if we were to do it with http but here it takes a callback function and it will pass a socket and here we are going to use the moment module to format to the time. 