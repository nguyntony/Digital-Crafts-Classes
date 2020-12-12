const http = require('http');
const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
const server = http.createServer(app);

const PORT = 3000;
const HOST = '0.0.0.0';

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const logger = morgan('tiny');
const url = `https://rickandmortyapi.com/api/character/`
const fetch = require("node-fetch")     // fetch needs to be installed into node. 

app.get("/data", (req, res) => {
    // // fetch is promise based so when we call fetch here you can then use .then 
    // fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': "application/json"
    //     },
    //     body: JSON.stringify({
    //         name: "user1"
    //     })
    // })      // if you want to grab data from an api you need to pass it a second argument which will allow you to do so. 
    //     // .then(res => console.log(res))      // this will return a response object and this isn't really readable because our data is json we need to do another step into for it to be accessible to us. 
    //     .then(res => {
    //         if (res.ok) {
    //             console.log('success!')
    //             return res.json()
    //         } else {
    //             console.log("not successful!")
    //         }
    //     })        // adding this will allow our response object to be readable by humans. 
    //     .then(data => console.log(data))        // after transforming that response object with .json we can now chain another .then and call it data and manipulate that data, here we are console loggin it.
    //     .catch(err => console.log("error"))     // this catch is when there is an error with how you are calling fetch, it will not catch a 404 error, for lets say if you are requesting data that isn't there, the fetch was still successful there just wasn't any data so this error prompt never runs. in order to catch 404 errors you need to do that within your res object .then code block

    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            res.render("data", {
                locals: {
                    db: data.results
                }
            })
        })
})

server.listen(PORT, HOST, () => {
    console.log(`Listening at`, HOST, PORT)
});