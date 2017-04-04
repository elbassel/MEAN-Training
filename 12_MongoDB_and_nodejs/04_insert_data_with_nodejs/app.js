
const userJson = {
  'name': "Shamshon El Gabbar",
  'url': 'sjabbar',
  'address':{
    'streetNo': 10,
    'city': 'Cairo'
  },
  'feedbacks':[
    {
      'likes': 20,
      'title': 'Ninja',
      'text': 'Your are awsome Ninja',
      'date': new Date(),
      'comments':[{
        'text': 'Totally wrong',
        'date':  new Date()
      }]
    },
    {
      'title': 'Kung fu',
      'text': "Your are not Kung fu champion",
      'date': new Date(),
      'comments':[{
        'text': 'Totally right',
        'date':  new Date()
      }]
    }
  ]
};

  const MongoClient = require('mongodb').MongoClient;
  const insertData = function(db, callback){
    db.collection('users').insertOne(userJson, function(err, result) {
      console.log("Inserted a document into the feedbacks collection.");
      callback();
    })
  };

  var url = 'mongodb://localhost:27017/test';
  MongoClient.connect(url, function(err, db) {
    console.log("Connected correctly to server.");
    insertData(db, function() {
        db.close();
    });
  });
