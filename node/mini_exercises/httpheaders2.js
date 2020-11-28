const http = require("http")
const htmlContent = `  
<!DOCTYPE html>
<html>
    <head>
        <title>HTTP HEADERS</title>
    </head>
    <body>
        <h1>list of rick and morty ppl</h1>
        <script>
            fetch("http://localhost:3344/")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const ul = document.createElement("ul")
                document.body.append(ul)

                data.forEach((person) => {
                    let li = document.createElement("li")
                    li.innerText = person.firstName
                    ul.append(li)
                })
            })
            .catch(err => console.log(err))
        </script>
    </body>
</html>`;
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*"
    })
    // res.write()
    res.end(htmlContent)
})

server.listen(5566, () => {
    console.log("5566 is rdy")
})