const Person = require('../model');
const express = require('express');
const router = express.Router();

router.post('/login', async(req,res)=>{
    return res.status(200).json({message : "Auth  Successful"});
})

module.exports = router;