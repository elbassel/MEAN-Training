var express = require('express');
var router = express.Router();
const integrator = module.parent.exports.integrator;

router.get('/',(req,res)=>{
  const currencies = req.query.currencies;
  integrator.getMoneyRates(currencies, res);
});

module.exports = router;
