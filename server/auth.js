const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const Person = require('./model');
const bcrypt = require('bcryptjs');
passport.use(new localStrategy(async(username,password,done)=>{
    try{
        const user = await Person.findOne({username : username});
        if(!user) return done(null, false, {message : "User does not exist"});

        const passwordMatch = await bcrypt.compare(password, user.password);
        if(passwordMatch){
            return done(null, user);
        }else{
            return done(null, false, {message : "Passoword Incorrect"});
        }
    }
    catch(error){
        return done(error);
    }
}))

const authMiddleware = ((req, res, next)=>{
    passport.authenticate('local', {session : false}, (err, user, info)=>{
        if(err) return next(err);

        if(!user) return res.status(401).json({message : info.message})

        req.user = user;
        next();
    })(req,res,next);
})

module.exports = authMiddleware;