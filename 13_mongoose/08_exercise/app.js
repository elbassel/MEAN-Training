//*****DB intialization*****/
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');


mongoose.connection.on('connected', function () {
  console.log("Database is connected.");
});

const express = require('express');
const app = express();
const portNumber = 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());

require('./schemas/posts');

app.get('/',function(req,res){
  res.end('App is running');
});

const usersCtrl = require('./routes/users-ctrl.js');

app.use('/users', usersCtrl);





app.listen(portNumber, function(){
  console.log('Example app listening on port' + portNumber + ' !');
});
