const Express = require("express");
const Bodyparser = require("body-parser");
const Cors = require("cors");
const Mongoose = require("mongoose");
const mentorregModel = require("./mentorregModel/mentorregModel")

var mentorlogin = Express();

mentorlogin.use(Cors());
mentorlogin.use(Bodyparser.json());
mentorlogin.use(Bodyparser.urlencoded({ extended: true }));

Mongoose.connect("mongodb+srv://college:vyshnav123@cluster0.lzmcvg5.mongodb.net/projectdb?retryWrites=true&w=majority", { useNewUrlParser: true });

mentorlogin.get("/", (req, res) => {
    res.send("Mentor Login");
});

mentorlogin.post("/mentorlogin", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await mentorregModel.findOne({ email, password });

        if (user) {
            // Successful login
            res.status(200).json({ message: 'Login successful', user });
        } else {
            // Invalid credentials
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        // Internal Server Error
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

mentorlogin.listen(3800); // You can choose a different port for the login server