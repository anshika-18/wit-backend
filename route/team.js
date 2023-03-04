const Team = require("../model/team");

module.exports = (app) => {
  app.post("/team/addMember", async (req, res) => {
    try {
      const {
        name,
        githubUrl,
        linkedInUrl,
        college,
        status,
        imageUrl,
        instagramUrl,
      } = req.body;
      const newMember = new Team({
        name,
        githubUrl,
        linkedInUrl,
        college,
        status,
        imageUrl,
        instagramUrl,
      });
      const result = await newMember.save();
      return res.status(200).json({ msg: "new member added", result });
    } catch (err) {
      return res.status(500).json(err);
    }
  });

  app.get("/team/getMembers", async (req, res) => {
    try {
      const data = await Team.find();
      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json(err);
    }
  });
};
