// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const User = require('../models/user.js');
// const bcryptjs = require('bcryptjs');
// const saltRounds = 10;

// const registerUser = (req, res) => {
//     return new Promise((resolve, reject) => {
  
//             // Store hash in your password DB.
        
//             if(true){
//                 bcryptjs.genSalt(10, function(err, salt) {
//                     bcryptjs.hash(req.body.password, salt, function(err, hash) {
//                         // Store hash in your password DB.
                    
//                         let user = new User({
//                             firstName: req.body.firstName,
//                             lastName: req.body.lastName,
//                             userName: req.body.emailaddress,
//                             password: hash
//                         })
//                         console.log(user);
//                         user.save((error)=>{ 
//                             console.log(error)
//                         });
//                         resolve('User has been added and saved to the db');
                        
//                     });
//                 });
//             }else{
//                 reject('Error occured');
//             }
//         });
//     }

//   const register = module.exports = registerUser;
console.log('fefe')