const mongoose = require("mongoose");

// 1. Define your schema
/*

  The schema must have
  name - Should be a string
  email - Should be a String and must be required
  password - Should be a String and muse be required

*/
let userShema = new mongoose.Schema({
  name:String,
  email:{
    type:String,
    require:true
  },
  password:{
    type:String,
    required:true
  }
})
// 2. Define your model
let userModel = mongoose.model('user', userShema)

// 3. Export your Model with 'module.exports'
module.exports = userModel