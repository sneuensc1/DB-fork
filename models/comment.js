const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
  writtenBy: {
    type: String
  },
  commentBody: {
    type: String
  }
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;