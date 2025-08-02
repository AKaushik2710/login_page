const express = require('express');
const router = express.Router();
const Person = require('../model');
const bcrypt = require('bcryptjs');
router.post('/register', async(req, res)=>{
    const {username, password} = req.body;
    const user = await Person.findOne({username : username});
    if(user){
        console.log(user)
        return res.status(409).json({message : "User Already Exists"});
    }
    const hashPass = await bcrypt.hash(password, 10);
    const person = new Person({username : username, password : hashPass});
    await person.save();
    
    return res.status(201).json({...person, message : "Auth successfull"});
})

module.exports = router;