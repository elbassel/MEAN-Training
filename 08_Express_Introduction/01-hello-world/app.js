const express = require('express');
const app = express();
const portNumber = 3000;
app.get('/',function(req,res){
  res.end('Hello world');
});

app.get('/home', function(req,res){
  res.json({'hello':'world'});
  res.end();
});

app.listen(portNumber, function(){
  console.log('Example app listening on port' + portNumber + ' !');
});
