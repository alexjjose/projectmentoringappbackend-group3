const mongoose = require("mongoose");

const mentorLoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const mentorloginModel = mongoose.model("MentorLogin", mentorLoginSchema);

module.exports = mentorloginModel;