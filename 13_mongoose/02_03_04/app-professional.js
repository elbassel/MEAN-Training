var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');

const Users = require('./models/users-model').UsersModels;
console.log(Users);
mongoose.connection.on('connected', function () {
  console.log("Database is connected.");

  Users.findByUserId('',(document)=>{
    console.log("User:");
    console.log(document);
  })

});
