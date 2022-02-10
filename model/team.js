const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: {
    type: String,
  },
  githubUrl: {
    type: String,
  },
  linkedInUrl: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  college: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("Team", teamSchema);
