var express = require('express');
var router = express.Router();
let counter = 0;

router.use((req,res,next)=>{
  counter ++;
  console.log('index is called');
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.getCounterValue = function(){
  return counter;
}

module.exports = router;
