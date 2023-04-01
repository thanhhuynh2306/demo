const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/'){
    res.end('Welcome to our homepage')
  }
  if (req.url === '/about') {
    res.end('About history')
  }
  res.end(`
  <h1>Oops</h1>
  <p>Something's wrong</p>
  <a href="/">Back to homepage</a>`)

})

server.listen(5000);