const mongoose = require("mongoose");

const Users = mongoose.model(
  "Users",
  new mongoose.Schema({
    email: String,
    password: String
  })
);

module.exports = Users;