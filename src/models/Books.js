const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  name: String,
  author: String,
  tags: [String],
  date: {
    type: Date,
    default: Date.now,
  },
  isPublished: Boolean,
});

module.exports.BookModel = model("OtherBook", bookSchema);
