const http = require('http')
const url = require('url')
const fs = require('fs')
const port = 3000

const server = http.createServer((req, res) => {
  let parsedURL = url.parse(req.url, true)
  let path = parsedURL.path.replace(/^\/+|\/+$/g, '')
  if (path === '') {
    path = 'index.html'
  }
  console.log(`Requested path ${path}`)

  let file = __dirname + '/public/' + path

  // res.writeHead(200, { 'Content-Type': 'text/html' })
  fs.readFile(file, function (error, data) {
    if (error) {
      res.writeHead(404)
      res.write('404 Error: File not found!')
    } else {
      res.write(data)
    }
    res.end()
  })
})

server.listen(port, 'localhost', (error) => {
  if (error) {
    console.log('Something went terribly wrong')
  } else {
    console.log(`Server is listening on port ${port}`)
  }
})
