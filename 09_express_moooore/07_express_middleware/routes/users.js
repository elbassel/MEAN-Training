var express = require('express');
var router = express.Router();
let counter = 0;

router.use((req,res,next)=>{
  counter ++;
  console.log('index is called');
  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.getCounterValue = function(){
  return counter;
}
module.exports = router;
