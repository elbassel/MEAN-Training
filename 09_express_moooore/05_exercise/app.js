const express = require('express');
const app = express();
const portNumber = 3000;
const integrator = require('./integrator');
module.exports.integrator = integrator;
  var bodyParser = require('body-parser');
  app.use(bodyParser.json());



app.get('/',function(req,res){
  res.end('App is running');
});

const exchangeCtrl = require('./routes/exchange-ctrl.js');

app.use('/exchanges', exchangeCtrl);





app.listen(portNumber, function(){
  console.log('Example app listening on port' + portNumber + ' !');
});
