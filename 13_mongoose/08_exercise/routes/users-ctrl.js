var express = require('express');
var router = express.Router();
const Users = require('./../models/users-model').UsersModels;


  router.get('/',function(req,res){
    Users.findAllUsers((userDocuments)=>{
      res.json(userDocuments);
    });
  });

  router.get('/:id',function(req,res){
    Users.findByUserId(req.params.id,(userDocument)=>{
      if(!userDocument){
        return res.json({"status" : "Object not found"});
      }
      if(userDocument.type === 'manager'){
        userDocument.views = userDocument.views + 1;
        userDocument.save((err)=>{
          if(!err){
            res.json(userDocument);
          }else{
            res.json(err);
          }
        });
      }else{
        res.json(userDocument);
      }

    });
  });

  router.get('/:id/expanded',function(req,res){
    Users.findUserExpandedById(req.params.id,(userDocument)=>{
      if(!userDocument){
        return res.json({"status" : "Object not found"});
      }
      if(userDocument.type === 'manager'){
        userDocument.views = userDocument.views + 1;
        userDocument.save((err)=>{
          if(!err){
            res.json(userDocument);
          }else{
            res.json(err);
          }
        });
      }else{
        res.json(userDocument);
      }

    });
  });

  router.delete('/:id',function(req,res){
    let id = req.params.id;
    Users.removeUserById(id, (results)=>{
      if(results){
        res.json({"status" : "Object is removed"});
      }else{
        return res.json({"status" : "Object not found"});
      }
    });
  });

  router.post('/',function(req,res){
    let user = req.body;
    Users.createUser(user, (userCreated)=>{
      res.json(userCreated);
    });
  });

  router.put('/', function(req,res){
    let user = req.body;
    let userTemp;
    Users.updateUser(user, (result)=>{
      if(result){
        res.json(result);
      }else{
        return res.json({"status" : "Object not found"});
      }
    });
  });


module.exports = router;
