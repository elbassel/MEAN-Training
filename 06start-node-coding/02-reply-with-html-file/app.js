const fs = require('fs');
const http = require('http');
const portNumber = 3000;
const server = http.createServer(handleRequests);

server.listen(portNumber,function(){
  console.log("Server is listening on port: " + portNumber);
});

function handleRequests(req,res){

  res.writeHead(200,{'content-type':'text/html'});

  fs.createReadStream('./public/hello.html').pipe(res);

}
