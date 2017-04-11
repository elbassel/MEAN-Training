let users = require('../schemas/users').userModel;
let UsersSchema = users.schema;

users.findByUserId = function(userId, callBack){
  users.findById(userId, (err, document)=>{
    callBack(document);
  });
};

users.findAllUsers = function(callback){
  users.find({},(err, documents)=>{
    callback(documents);
  });
}
users.createUser = function(userJson, callBack){

  users.create( userJson,(err, result)=>{
    if(!err){
      callBack(result);
    }else{
      callBack(err);
    }
  });
};

users.removeUserById = function(userId, callback){
  users.findByIdAndRemove(userId, (err, result)=>{
    if(!err){
      callback(result);
    }else{
      callback(err);
    }
  });
}

users.updateUser = function(userJson, callback){
  users.findByIdAndUpdate( userJson._id, userJson, {new: true}, (err, document)=>{
    if(!err){
      callback(document);
    }else{
      callback(err);
    }
  });
};


users.findUserExpandedById = function(userId, callback){
  users.findById(userId).populate('posts').exec((err, document)=>{
    if(!err){
      callback(document);
    }else{
      callback(err);
    }
  });
};

exports.UsersModels = users;
