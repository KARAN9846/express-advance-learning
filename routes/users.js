// require and setup

const mongoose = require("mongoose");  
mongoose.connect("mongodb://127.0.0.1:27017/dopractice");


// making schema

const userschema =mongoose.Schema({

  username: String,
  name: String,
  age: Number,
  

});


// create model and export

module.exports = mongoose.model("user", userschema)