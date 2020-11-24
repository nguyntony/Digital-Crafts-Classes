const { read } = require("fs")
const http = require("http")

const server = http.createServer((req, res) => {

  res.setStatus = 200;
  const url = new URL(req.headers.host + req.url)

  let page = url.searchParams.get("page")
  let count = url.searchParams.get("count")
  let content = ""

  switch (page) {
    case "about":
      content += `<h1> this is the about page</h1>`;
      break;
    case "contact":
      content += `<h1> this is the contact me</h1>`;
      break;
    default:
      content += `<h1> this is the home page</h1>`;
  }

  content += `<div>the count is ${count || 0}</div>`
  res.write(content)
  res.end()
})

server.listen(3344, () => console.log("3344 is ready"))