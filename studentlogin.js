const Express = require("express");
const Bodyparser = require("body-parser");
const Cors = require("cors");
const Mongoose = require("mongoose");
const studentregModel = require("./studentregModel/studentregModel")

var studentlogin = Express();

studentlogin.use(Cors());
studentlogin.use(Bodyparser.json());
studentlogin.use(Bodyparser.urlencoded({ extended: true }));

Mongoose.connect("mongodb+srv://college:vyshnav123@cluster0.lzmcvg5.mongodb.net/projectdb?retryWrites=true&w=majority", { useNewUrlParser: true });

studentlogin.get("/", (req, res) => {
    res.send("Student Login");
});

studentlogin.post("/studentlogin", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await studentregModel.findOne({ email, password });

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

studentlogin.listen(3600); // You can choose a different port for the login server