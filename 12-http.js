const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to our home page!")
  }
  else if (req.url === "/about") {
    res.write("Here is our short history");
  }
  else {res.write(`
  <h1>Opps!</h1>
  <p>We can't find the page you're looking for</p>
  <a href="/">back home</a>
  `)}

  res.end();
});

server.listen(5000, ()=> console.log('listening on port 5000'));
