const mongoose = require('mongoose');

const connectDB = async(uri)=>{
    try{
        const response = await mongoose.connect(uri);
    }
    catch(err){
        console.error("Encountered", err);
    }
}

module.exports = connectDB;