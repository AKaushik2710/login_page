const mongoose = require('mongoose');
const connectDB = require('./db');
require('dotenv').config();
connectDB(process.env.DB);
const PersonSchema = mongoose.Schema({
    username : {
        required : true,
        type : String
    },
    password : {
        required : true,
        type : String
    }
})

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;