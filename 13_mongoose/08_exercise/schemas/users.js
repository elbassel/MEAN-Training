  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var userSchema = new Schema({
    fname:  String,
    lname: String,
    username:   String,
    type: String,
    views: {type: Number, default: 0},
    address: {
      country: String,
      city: String,
      streetNo: Number
    },
    lastUpdateDate: {
      type: Date,
      default: Date.now
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref : 'posts'
      }
    ]
  });

  var User = mongoose.model('users', userSchema);

  exports.userModel = User;
