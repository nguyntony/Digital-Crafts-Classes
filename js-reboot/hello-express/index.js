const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);
const port = 3001


app.get("/", (req, res) => {
    res.send("Hello Express")
});

app.get("/cats", (req, res) => {
    res.send(`
    <ul>
        <li><a href="/cats/taro">Taro</a></li>
        <li><a href="/cats/mochi">Mochi</a></li>
    </ul>
    `)
})
// you can "send" html format and res.send will do its best to set the header according to what you send.


app.get("/cats/:catName", (req, res) => {
    const { catName } = req.params;
    res.send(`
    hi there, my name is ${catName}
    <br>
    <a href="/cats">Return</a>
    `)
})
// here we are using the colon to declare a keyword that will take place in this of the url path. we are grabbing that value from the req obj by doing req.params and we are using destructuring to extract the catName key and we are assigining that to a variable also named catName, notice how catName is the key because that is what we used as our placeholder in the url path. It is also known as a route parameter. 





server.listen(port, () => console.log(`port:${port} is ready`));
// right here listen technically takes 3 arguments but we only pass it two, what is happening is that the second argument can either be a string or callback fn, if it is a string, .listen() understands that the user wants the provided strong to be the url path (locahhost) but if it is not given, .listen() understands that localhost will be the default. so you may see server.listen(port, 'localhost', callbackfn)