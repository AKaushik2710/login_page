const express = require('express');
const app = express();
const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
const Person = require('./model');
const login = require('./loginRoutes/login');
const register = require('./loginRoutes/register');
const auth = require('./auth');
const passport = require('passport');
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors())
const dis = (req,res, next)=>{
    res.status(200).send(users);
    next();
}
app.get('/', dis,(req,res)=>{
    res.status(200).send("Hello I am perfeectly fineeeee")
})
// app.post('/', async (req,res)=>{
//     const {name, pass} = req.body;
//     console.log(name,pass);
//     const myhash = await bcrypt.hash(pass, 10);
//     const person = await new Person({username: name, password : myhash});
//     const save = await person.save();
//     res.status(201).send(`User ${name}, your ID has been registered with Pass ${pass}`, save)
// })
// const passport = require('passport');
// const localStrategy = require('passport-local').Strategy;

// passport.use(new localStrategy({
//     usernameField: 'userNAME',
//     passwordField: 'pass'
// },async(userNAME, pass, done)=>{
//     try{
//         const user = await Person.find({username : userNAME});
//         console.log(user);
//         if(!user) {
//             console.log("Not found", user);
//             return done(null, false, {message : "Incorrect Username"});
//         }
//         else{
//             user.forEach(e => {
//                 if(e.password === pass){
//                     console.log("Found");
//                     return done(null, user);
//                 }
//             });
//         }
//         // if(user.password === pass) {
//         //     console.log("Found");
//         //     return done(null, user);}
//     }
//     catch(err){
//         console.log("Error")
//         return done(err);
//     }
// }))
// app.use(passport.initialize());
// const mid = passport.authenticate('local', {session : false});
// app.post('/auth', passport.authenticate('local', {session : false}), async(req,res)=>{
//     // const {user, pass} = req.body;
//     console.log("Doing this");
//     res.status(200).json(req.user);
// })
app.use(passport.initialize())
app.use('/', register);
app.use('/', auth, login);
app.listen(3000, console.log("Run"));