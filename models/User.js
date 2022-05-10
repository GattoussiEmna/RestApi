const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  passeword : {

  }
},{timestamps: true});

module.exports = User = mongoose.model("user" , userSchema);