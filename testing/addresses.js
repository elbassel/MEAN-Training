// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var addressSchema = new Schema({
  country: String,
  city: String

});


addressSchema.pre('remove', function(next) {
  console.log("Address is in remove");
  console.log(this);
  next();
});
// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('addresses', addressSchema);

// make this available to our users in our Node applications
module.exports = User;
