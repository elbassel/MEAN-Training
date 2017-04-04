  var MongoClient = require('mongodb').MongoClient;

  const getUsersByName = function(db, userName, callback){
    const cursor = db.collection('users').find({name: userName});
    cursor.each(function(err, doc) {
       if (doc != null) {
          console.dir(doc);
       } else {
          callback();
       }
    });
  };

  const getUsersInCity = function(db, city, callback){
    const cursor = db.collection('users').find({'address.city': city});
    cursor.each(function(err, doc) {
       if (doc != null) {
          console.dir(doc);
       } else {
          callback();
       }
    });
  };

  const getUsersByFeedbackTitle = function(db, title, callback){
    const cursor = db.collection('users').find({'feedbacks.title': title});
    cursor.each(function(err, doc) {
       if (doc != null) {
          console.dir(doc);
       } else {
          callback();
       }
    });
  };

  const getUsersByPostLikes = function(db, minLikes, maxLikes, callback){
    const cursor = db.collection('users').find({'feedbacks.likes': {$gt : maxLikes, $lt: minLikes}});
    cursor.each(function(err, doc) {
       if (doc != null) {
          console.dir(doc);
       } else {
          callback();
       }
    });
  };

  const getUsersByPostByCityAndName = function(db, name, city, callback){
    const cursor = db.collection('users').find({'address.city': address.city, 'name': name}});
    cursor.each(function(err, doc) {
       if (doc != null) {
          console.dir(doc);
       } else {
          callback();
       }
    });
  };

  const getUsersByPostByCityOrName = function(db, name, city, callback){
    const cursor = db.collection('users').find({$or: [{'address.city': address.city, 'name': name}]}});
    cursor.each(function(err, doc) {
       if (doc != null) {
          console.dir(doc);
       } else {
          callback();
       }
    });
  };



  var url = 'mongodb://localhost:27017/test';
  MongoClient.connect(url, function(err, db) {
    console.log("Connected correctly to server.");
    getUsersByName(db,"Shamshon El Gabbar", function() {
        db.close();
    });
  });
