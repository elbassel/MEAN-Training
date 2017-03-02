var express = require('express');
var router = express.Router();
const routesCtrl = module.parent.exports.routesCtrl;
const usersCtrl = module.parent.exports.usersCtrl;


/* GET users listing. */
router.get('/', function(req, res) {

  const total = routesCtrl.getCounterValue() + usersCtrl.getCounterValue();
  res.json({
    'total': total,
    'index' : routesCtrl.getCounterValue(),
    'users' : usersCtrl.getCounterValue()
  });
});


module.exports = router;
