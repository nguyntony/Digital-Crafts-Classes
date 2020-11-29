const http = require("http");
const url = require("url");

http.get(url, (response) => {
    let result = "";
    response.setEncoding("utf8");


    response.on("error", (err) => console.log(err));


    response.on("data", (data) => {
        result += data;
    })

    response.on("end", () => console.log(result.length, result));
});
