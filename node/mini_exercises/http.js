const http = require("http")
const htmlContent = `  
<!DOCTYPE html>
<html>
    <head>
        <title>HTML Content from Node</title>
    </head>
    <body>
        <h1>tony's fav foods</h1>
        <ul>
            <li>sushi</li>
            <li>spicy foods</li>
            <li>dark chocolate</li>
        </ul>
        <script>
            console.log("this is a secret msg")
        </script>
    </body>
</html>`;
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end(htmlContent)
})

server.listen(3344, () => {
    console.log("im ready")
})