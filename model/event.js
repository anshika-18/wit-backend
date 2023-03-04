const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  topic: {
    type: String,
    required: true,
  },
  posterUrl: {
    type: String,
  },
  speaker: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
  },
  registerUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Event", eventSchema);
