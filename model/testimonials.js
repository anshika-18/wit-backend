const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testimonialSchema = new Schema({
  name: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  college: {
    type: String,
  },
  rating: {
      type: String,
  },
  feedback: {
    type: String,
  },
});

module.exports = mongoose.model("Testimonials", testimonialSchema);
