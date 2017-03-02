const express = require('express');
const app = express();
const portNumber = 3000;
const homeCtrl = express.Router();
const contactsCtrl = express.Router();
const profileCtrl = express.Router();


app.get('/',function(req,res){
  res.end('App is running');
});

homeCtrl.get('/',function(req,res){
  res.end('Hello from the home page')
});

contactsCtrl.get('/', function(req,res){
  const contacts = {
    mobile: 'xxxx-xxx-xxxx',
    skype: 'ahmed_elbassel',
    email: 'elbassel.n13@gmail.com'
  };
  res.json(contacts);
});

profileCtrl.get('/', function(req,res){
  const profile = {
    name: 'Ahmed Elbassel',
    job: 'Engineer',
    employer: 'IBM'
  };
  res.json(profile);
});



app.use('/home', homeCtrl);
app.use('/contacts', contactsCtrl);
app.use('/profiles', profileCtrl);


app.listen(portNumber, function(){
  console.log('Example app listening on port' + portNumber + ' !');
});
