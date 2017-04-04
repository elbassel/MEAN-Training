const express = require('express');
const app = express();
const portNumber = 3000;
const usersCtrl = express.Router();
const postCtrl = express.Router();
const usersJsons = require('./users.json');
const postsJsons = require('./posts.json');

app.get('/',function(req,res){
  res.end('App is running');
});


usersCtrl.get('/',function(req,res){
  res.json(usersJsons);
});

postCtrl.get('/', function(req,res){
  res.json(postsJsons);
});


app.use('/users', usersCtrl);
app.use('/posts', postCtrl);




app.listen(portNumber, function(){
  console.log('Example app listening on port' + portNumber + ' !');
});
