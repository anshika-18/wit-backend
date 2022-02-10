const Team = require("../model/team");

module.exports = (app) => {
  app.post("/team/addMember", async (req, res) => {
    try {
      const { name, githubUrl, linkedInUrl, college, status, imageUrl } =
        req.body;
      const newMember = new Team({
        name,
        githubUrl,
        linkedInUrl,
        college,
        status,
        imageUrl,
      });
      const result = await newMember.save();
      return res.status(200).json({ msg: "new member added", result });
    } catch (err) {
      return res.status(500).json(err);
    }
  });
};
