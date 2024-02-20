const mongoose = require("mongoose")

const signupSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }    
} , { timestamps : true})

const signupmodel = mongoose.model("User",signupSchema);

module.exports = signupmodel;

