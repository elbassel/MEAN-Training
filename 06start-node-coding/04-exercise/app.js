const http = require('http');
const portNumber = 3000;
const server = http.createServer(handleRequests);
const calculator = require('./calculator');
const url = require('url');

server.listen(portNumber,function(){
  console.log("Server is listening on port: " + portNumber);
});

function handleRequests(req,res){

  res.writeHead(200,{'content-type':'text/html'});
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  if(url_parts.pathname === '/calc'){
    const num1 = parseInt(query.num1);
    const num2 = parseInt(query.num2);
    const oper = query.oper;
    let result;
    let sign;
    switch (oper) {
      case "add":
        result = calculator.add(num1, num2);
        console.log("The summation is: " + result);
        sign = '+';
        break;
      case "sub":
        result = calculator.subtract(num1, num2);
        console.log("The subtractions is: " + result );
        sign = '-';
        break;
      case "mul":
        result = calculator.multiply(num1, num2);
        console.log("The multiplication is: " + result );
        sign = 'X';
        break;
      case "div":
        result = calculator.devide(num1, num2);
        console.log("The devision is: " + result);
        sign = '/';
        break;
      default:
        res.end("<h3 style='color:red'>Insupported operation: " + oper + "</h3>")
        return;
    }
    res.write("<h1>" + num1 + " " + sign + " "  + num2 + " = " + result +"</h1>");
  }else{
    res.write("<h3 style='color:red'>You have to use <b>/calc</b> route</h3>");
  }
  res.end();

}
