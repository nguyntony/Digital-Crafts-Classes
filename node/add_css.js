const http = require("http");   // importing the http module

const generateContent = require("./modules/generateContent")    // we want to import the information that this file has and by doing this we also techhnically imported the makeHeading module that we imported in this particular module, so we chain imported. 

const serveFile = require("./modules/serveFile")

const port = 3349





const server = http.createServer((req, res) => {


  if (req.url === `/favicon.ico`) return serveFile(req, res, req.url);
  if (req.url === `/styles.css`) return serveFile(req, res, req.url);
  // this is wherre it uses the serveFile function that we imported and the req.url is the request url that we get from server. 


  res.writeHead(200);
  const url = new URL(req.headers.host + req.url)   // this looks like standard syntax on how to create a new url. 


  let page = url.searchParams.get("page")
  let count = url.searchParams.get("count")
  let additional = []
  // we are creating query string key names here. 


  url.searchParams.forEach((value, name) => {
    additional.push(`<li>${name}:${value}</li>`)    // what this does is that it shows the query string of the given page. 
  })


  let wrapper = generateContent({
    page,
    count,
    additional
  })
  // this is the singular object in which we passed to generateContent and these happen to be named the same variables as the parameters when we defined/declared this function. this has to be in a specific order as well. 



  res.write(wrapper)    // here we are going to write the wrapper which is basically the f string that it returns in the generateContent file. 
  res.end()
})
server.listen(port, () => console.log(`${port} is rdy`))