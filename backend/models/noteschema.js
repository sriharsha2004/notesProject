const mongoose = require("mongoose");
const Usermodel = require("./signupSchema");

const Schema = mongoose.Schema;

const notesSchema = new Schema({
    title :{
        type : String,
        required : true
    },
    subject : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
} , { timestamps : true})

const notesmodel = mongoose.model('note', notesSchema);

module.exports = notesmodel;