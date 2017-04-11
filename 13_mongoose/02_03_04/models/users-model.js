let users = require('../schemas/users');

users.findByUserId = function(userId, callBack){
  user.findById(userId, (err, document)=>{
    callBack(document);
  });
};

exports.UsersModels = users;
