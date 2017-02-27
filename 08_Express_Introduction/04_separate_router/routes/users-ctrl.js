var express = require('express');
var router = express.Router();
const usersJsons = require('../users.json');

router.get('/',function(req,res){
  res.json(usersJsons);
});

module.exports = router;
