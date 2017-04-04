var url = 'mongodb://localhost:27017/test';
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

  const updateUserName = function(db, _id, newName, callback){
    const id = new ObjectID(_id);
    //for first one matched
    db.collection('users').update({'_id': id},{$set:{'name': 'Rayan Dahl'}},(err, status)=>{
      console.log(status.result);
      callback();
    });
  };

  const updateUserCity = function(db, _id, city, callback){
    const id = new ObjectID(_id);
    //for first one matched
    db.collection('users').update({'_id': id},{$set:{'address.city': 'Giza'}},(err, status)=>{
      console.log(status.result);
      callback();
    });
  };

  MongoClient.connect(url, function(err, db) {
    console.log("Connected correctly to server.");
    updateUserName(db,"58e2aeb228c4b12917ea79a7" , "Shamshon El Gabbar", function() {
        db.close();
    });
  });
