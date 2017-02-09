
var fs = require('file-system');

fs.mkdir('1/2/3/4/5',  function(err) {
  if(!err){
    console.log("folder are created successfully");
  }else{
    console.log("something is wrong");
  }
});
