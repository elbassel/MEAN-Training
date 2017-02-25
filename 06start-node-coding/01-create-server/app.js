const http = require('http');
const portNumber = 3000;
const server = http.createServer(handleRequests);

server.listen(portNumber,function(){
  console.log("Server is listening on port: " + portNumber);
});

function handleRequests(req,res){
  res.end("Hello world");
}
