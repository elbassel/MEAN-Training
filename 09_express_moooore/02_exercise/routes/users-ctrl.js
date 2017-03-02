var express = require('express');
var router = express.Router();
let usersJsons = [];


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
    res.json({'status':'user not found'});
  });

  router.delete('/:id',function(req,res){
    let id = parseInt(req.params.id);
    const lengthBefore = usersJsons.length;
    usersJsons = usersJsons.filter((user)=>{
      if(id !== user.id){
        return user;
      }
    });
    const lengthAfter = usersJsons.length;

    if(lengthAfter < lengthBefore){
      return res.json({'status':'user removed'});
    }

    res.json({'status':'user not found'});

  });

  router.post('/',function(req,res){
    let user = req.body;
    usersJsons.push(user);
    res.json(user);
  });

  router.put('/', function(req,res){
    let user = req.body;
    let userTemp;
    for(let i = 0; i < usersJsons.length; i++){
      userTemp = usersJsons[i];
      if(userTemp.id === user.id){
         usersJsons[i] = user;
         break;
      }
    }

    res.json(user);
  });


module.exports = router;
