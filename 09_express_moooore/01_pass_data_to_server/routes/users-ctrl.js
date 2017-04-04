var express = require('express');
var router = express.Router();
const usersJsons = require('../users.json');


  router.get('/',function(req,res){
    let username = req.query.username;

    for (var i = 0; i < usersJsons.length; i++) {
      if(username === usersJsons[i].username){
        return res.json([usersJsons[i]]);
      }
    }
    res.json([]);
  });

  router.get('/:id',function(req,res){
    let id = parseInt(req.params.id);
    for (var i = 0; i < usersJsons.length; i++) {
      if(id === usersJsons[i].id){
        return res.json(usersJsons[i]);
      }
    }
    res.json({});
  });

  router.post('/',function(req,res){
    let user = req.body;
    console.log(req.body + " bassel ");
    res.json(user);
  });





module.exports = router;
