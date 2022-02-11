const Testimonials = require("../model/testimonials");

module.exports = (app) => {
  app.post("/testimonials/addFeedback", async (req, res) => {
    try {
      const { name, feedback, college, imageUrl, rating } =
        req.body;
      const newFeedback = new Testimonials({
        name,
        feedback,
        college,
        rating,
        imageUrl,
      });
      const result = await newFeedback.save();
      return res.status(200).json({ msg: "new testimonial added", result });
    } catch (err) {
      return res.status(500).json(err);
    }
  });
};
