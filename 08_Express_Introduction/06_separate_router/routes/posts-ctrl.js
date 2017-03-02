var express = require('express');
var router = express.Router();
const postsJsons = require('../posts.json');

router.get('/',function(req,res){
  res.json(postsJsons);
});

module.exports = router;
