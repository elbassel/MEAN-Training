var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

// if our user.js file is at app/models/user.js
var User = require('./users');
var Address = require('./addresses');

basselAddress = new Address({
  country: "egypt",
  city: "cairo"
});
// create a new user called chris
var chris = new User({
  name: 'Chris',
  username: 'sevilayha',
  password: 'password',
  numbers: [22,44,66,88]
});

User.findOne({ name: 'Chris' }, (err, user)=> {
  if (err) throw err;
user.name = "ali";
user.numbers.pull(22);
user.save((err,newD)=>{
  console.log(newD);
});
  // // delete him
  // user.remove(function(err) {
  //   console.log(err);
  //   if (err) throw err;
  //
  //   console.log('User successfully deleted!');
  // });
});
//
// basselAddress.save((err, doc)=>{
//   console.log(doc);
//   chris.address = doc._id;
//   chris.save(function(err) {
//     if (err) throw err;
//
//     console.log('User saved successfully!');
//   });
// })
// // call the built-in save method to save to the database
