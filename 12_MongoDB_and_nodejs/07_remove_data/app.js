var url = 'mongodb://localhost:27017/test';
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

  const removeOneDocByName = function(db, name, callback){
      db.collection('users').deleteOne({'name': name},(err, results)=>{
        console.log(results);
        callback();
      });
  };

  const removeAllByName = function(db, name, callback){
      db.collection('users').deleteMany({'name': name},(err, results)=>{
        console.log(results);
        callback();
      });
  };

MongoClient.connect(url, function(err, db) {
  console.log("Connected correctly to server.");
  removeByName(db,"Shamshon El Gabbar", function() {
      db.close();
  });
});
