const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName : {
    type : String,
    required : true
  },
  lastName : {
    type : String,
  },
  userName : {
      type : String,
      required:true
  },
  emailId : {
    type : String,
    required : true
  },
  vjudgeId : {
      type : String
  },
  college : {
      type:String,
      required:true
  },
  role : {
      type : String
  },
  phone : {
      type : String
  },
  password :{
      type : String,
      required : true
  },
  eventsAttended:{
    
  }
});

module.exports = mongoose.model("User", userSchema);
