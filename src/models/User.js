const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    default: "seller",
  },
  books: [
    {
      type: Types.ObjectId,
      ref: "Book",
    },
  ],
});

module.exports.UserModel = model("User", userSchema);
