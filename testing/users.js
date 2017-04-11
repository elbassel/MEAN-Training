// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Address = require('./addresses');
// create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true},
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  numbers:[Number],
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date,
  address: {type: Schema.Types.ObjectId, ref : 'addresses'},
});

userSchema.pre('remove', function(next) {
  console.log("pre remove");
  console.log(this);
  Address.remove({_id:this.address},(err, document)=>{
    // document.remove(function(err) {
      if (err) throw err;
      console.log('Address successfully deleted!');
      next();
    // });
  })
});
// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('users', userSchema);
User.schema = userSchema;


// make this available to our users in our Node applications
module.exports = User;
