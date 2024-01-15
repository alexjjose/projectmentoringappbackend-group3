const mongoose = require("mongoose");

const studentLoginSchema = new mongoose.Schema({
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

const studentloginModel = mongoose.model("StudentLogin", studentLoginSchema);

module.exports = studentloginModel;