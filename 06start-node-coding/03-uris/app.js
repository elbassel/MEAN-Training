const fs = require('fs');
const http = require('http');
const url = require('url');
const portNumber = 3000;
const server = http.createServer(handleRequests);

server.listen(portNumber,function(){
  console.log("Server is listening on port: " + portNumber);
});

function handleRequests(req,res){

  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  
  res.writeHead(200,{'content-type':'text/html'});

  if(url_parts.pathname === '/home'){
    res.end("<h3>We're in home</h3>");
  } else if(url_parts.pathname === '/hello'){
    const name = query.name;
    res.end('<h3>Greeting</h3><h2>Hello ' + name + '</h2>');
  }
}
