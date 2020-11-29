const http = require("http")
const bl = require("bl")
const url = process.argv[2]

http.get(url, response => {
    response.pipe(bl((err, data) => {
        if (err) return console.log(err)

        data = data.toString();
        console.log(data.length)
        console.log(data)
    }))
})

// pipe takes stream objects and flows them into what else you'd want to do.