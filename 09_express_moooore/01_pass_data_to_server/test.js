const request = require('request');
request.post({url:'http://localhost:3000/users', form: {key:'value'}}, function(err,httpResponse,body){
  console.log(err);
  // console.log(httpResponse);
  console.log(body);
});
