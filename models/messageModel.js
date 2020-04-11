const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A message must have a name']
  },
  email: {
    type: String,
    required: [true, 'A message must have an email ']
  },
  subject: String,
  text: {
    type: String,
    required: [true, 'A message must have a text']
  }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;