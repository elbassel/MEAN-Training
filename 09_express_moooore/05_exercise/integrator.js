var request = require('request');

//Passing res is violates the responsibility, but we do that becasue we didn't teach promises yet.
const getMoneyRates = function(currencies,res){
  request('http://www.apilayer.net/api/live?access_key=24f9e1c515c5ef94185b71f29a39d0db&currencies=' + currencies, (err,response,body)=>{
    if(!err){
        return res.json(JSON.parse(body));
    }
    res.json(err);
  });

};

exports.getMoneyRates = getMoneyRates;
