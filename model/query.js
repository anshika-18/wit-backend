const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const Schema = mongoose.Schema;

const querySchema = new Schema({
  firstName : {
    type : String,
    required : true
  },
  lastName : {
    type : String,
  },
  emailId : {
    type : String,
    required : true
  },
  description: {
    type: String,
  }
});

module.exports = mongoose.model("Query", querySchema);
