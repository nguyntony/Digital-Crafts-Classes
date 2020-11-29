const http = require('http')
const url = require('url')
const moment = require('moment')

const port = process.argv[2]

const server = http.createServer((req, res) => {
    // console.log(url.parse(req.url, true))
    const { pathname, query } = url.parse(req.url, true)
    res.writeHead(200, { 'Content-Type': 'application/json' })

    if (pathname === '/api/parsetime') {
        return res.end(JSON.stringify({
            hour: moment(query.iso).hour(),
            minute: moment(query.iso).minute(),
            second: moment(query.iso).second()
        }))
    }

    if (pathname === '/api/unixtime') {
        return res.end(JSON.stringify({
            unixtime: Number(moment(query.iso).format('x'))
        }))
    }

    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
        success: false,
        message: `${pathname} is not a valid endpoint.`
    }))
})

server.listen(port)

// url module has a special method that we need, it is called parse. what does it do exactly? it parses the url and returns an object with different properties. the default second value is false. so like I said earlier it returns a url object with properties that we care about. for this exercise, we want to look at the query and pathname. 

// sidenote: earlier we had to give the method a second argument of true bc if it is set to false (which is the default) the query property on the returned URL object will be an unparsed undecoded string. 

// since it returns an URL object, we can use destructuring to extra the properties that we wnat. 

// we need to set the content type to json bc that is what the exercise wants. 

// we are importing a moment module which will handle the formatting that we get from the query. note that query has an object with an iso key and the value is the time that we want to access and we are calling hour, min, and second on it. if you read the moment doc, the lower case x will get us the millisecond timestamp that we want. 

// our code block is almost like as switch case statement, if the pathname is equal to this or that it will run this or that but in the event that it is neither we need to set the writeHead to 404.

// this exercise requires use to serve json data which is why we will serve this information like so but when we want to display this data on the html webpage we use json.stringify so that the webpage can read it as a string. 

// we are also using moment so that we can pass the iso timeformat and we can extract the times that we want from the object value.