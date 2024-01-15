const Express = require("express");
const Bodyparser = require("body-parser");
const Cors = require("cors");
const Mongoose = require("mongoose");
const projectModel = require("./projectModel/projectModel")


var project = Express();

project.use(Cors());
project.use(Bodyparser.json());
project.use(Bodyparser.urlencoded({ extended: true }));

Mongoose.connect("mongodb+srv://college:vyshnav123@cluster0.lzmcvg5.mongodb.net/projectdb?retryWrites=true&w=majority", {
  useNewUrlParser: true,})

project.get("/", (req, res) => {
  res.send("Project Mendoring App");
});

project.post("/project", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await projectModel.findOne({ email, password });

    if (user) {
      res.json({ success: true, message: "Login successful", userData: user });
    }
    else {
      res.json({ success: false, message: "Login failed. User not found." });
  }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

project.listen(3000, () => {
  console.log("Server is running on port 3000");
});