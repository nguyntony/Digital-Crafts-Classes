const http = require("http")
const bl = require("bl")
const async = require("async")

const urls = process.argv.slice(2);

async.eachSeries(urls, (url, nextUrl) => {

    // here, we have an array as the first argument and a callback function as the second arugment and then we are passing a singluar item of each array named url, the nextUrl is a callback function which will invoke the same code for the next item in the array. eachSeries is similar to forEach or each but it will do the request calls in order.

    http.get(url, response => {
        response.pipe(bl((err, data) => {
            if (err) return nextUrl(err)

            data = data.toString();
            console.log(data)
            nextUrl()       //this callback that is required as the syntax for the way to use this method is that this is a callback that will call the next item in the array.
        }))
    })
})

// http.get(urls[0], response => {
//     response.pipe(bl((err, data) => {
//         if (err) return console.log(err)

//         data = data.toString();
//         console.log(data)
//     }))
// })