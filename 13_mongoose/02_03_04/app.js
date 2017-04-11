  var mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost:27017/test');

  const Users = require('./schemas/users').userModel;
  const usersDoc = new Users({
    fname: "Naruto",
    lname: "Uzumaki",
    posts: []
  });
  const jsonUpdated = {
    fname: "Utchiha",
    lname: "Uzumaki",
    posts: []
  };
  mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to localhost:27017/test');
    usersDoc.save((err, document)=>{
      console.log(err);
      console.log("Data is saved");
    })
    Users.find({},(err, documents)=>{
      console.log(documents);
    });
    Users.update({/*condition the same as mongodb*/},
      jsonUpdated, (err, result)=>{
        console.log(result);
      });
    Users.remove({/*condition the same as mongodb*/},
    (err, results)=>{
      console.log(results.result);
    });
  });
