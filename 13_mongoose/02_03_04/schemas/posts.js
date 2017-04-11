  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var postSchema = new Schema({
    body:  String,
    comments: [String],
    user: {
      type: Schema.Types.ObjectId,
      ref : 'users'
    },
    lastUpdateDate: {
      type: Date,
      default: Date.now
    }
  });

  var Post = mongoose.model('posts', postSchema);

  exports.postModel = Post;
