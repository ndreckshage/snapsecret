(function() {
  var mongoose;

  mongoose = require('mongoose');

  module.exports = function() {
    var Schema, Secret, commentSchema, secretSchema;
    Schema = mongoose.Schema;
    commentSchema = new Schema({
      message: {
        type: String,
        required: 'Comment needs a body'
      },
      date: {
        type: Date,
        "default": Date.now
      },
      ip_address: {
        type: String,
        required: 'No IP'
      },
      orignal_poster: {
        type: Boolean,
        "default": false
      }
    });
    secretSchema = new Schema({
      message: {
        type: String,
        required: 'Whoops'
      },
      ip_address: {
        type: String,
        required: 'No IP'
      },
      commentable: {
        type: Boolean,
        "default": true
      },
      displayed: {
        type: Boolean,
        "default": false
      },
      view_count: {
        type: Number,
        "default": 0
      },
      created_at: {
        type: Date,
        "default": Date.now
      },
      reports: {
        type: Number,
        "default": 0
      },
      name: String,
      location: String,
      queue_estimate: Number,
      comments: [commentSchema]
    });
    Secret = mongoose.model('Secret', secretSchema);
    return Secret;
  };

}).call(this);
