require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");

const bodyparser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  return res.send("hello world");
});

require("./route/team")(app);
require("./route/testimonials")(app);
require("./route/event")(app);
require("./route/query")(app)
require("./route/auth")(app)
require("./route/resource")(app)

const PORT = process.env.PORT || 5001;
app.listen(PORT, (err) => {
  console.log("APP is live");
});
