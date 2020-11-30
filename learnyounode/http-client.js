const http = require("http");

const url = process.argv[2]
// the argument that is given thru the terminal will be referenced as url

// stream objects have three different properties, data, error and end. 

// the second arugment is a callback function
http.get(url, response => {
    response.on("error", () => console.error(err));
    response.setEncoding("utf8") // this is necessaary bc the response will be returning a buffer.
    response.on("data", data => {
        console.log(data) // here it looks like data is just a one liner and is a string. 

        console.log(`hello ${data}`) // I can do something liek this.
    })

    console.log(url);

    response.on("end", () => console.log(""))
})




// what is happening here? we are creating a program that will accept a url and the callback function will be the response from that url and it has methods such as .on from using the .get method. and the response as three events that can occur, "error", "data", "end", so this program in particular will listen to if there is an error then log that error (if there is one)

// the data that it received from the response is just logged back to us and when the response is end, (assuming that there is no more data then it ends the response and here we just pass an empty string in that event. )