const express = require('express');
const app = express();
const portNumber = 3000;

  var bodyParser = require('body-parser');
  app.use(bodyParser.json());



app.get('/',function(req,res){
  res.end('App is running');
});

const usersCtrl = require('./routes/users-ctrl.js');

app.use('/users', usersCtrl);





app.listen(portNumber, function(){
  console.log('Example app listening on port' + portNumber + ' !');
});
