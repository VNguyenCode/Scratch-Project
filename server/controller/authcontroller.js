const path = require('path');
const fs = require('fs');
const db = require('../db/databaseIndex.js');
const bcrypt = require('bcrypt');

const authcontroller = {};

//middleware
// verify if user exists with the db.query to check in Postgres
//0=  go to dashboard/ front page
authcontroller.verify = (req, res, next) => {
  console.log('req.body.username: ', req.body.username);
  res.locals.username = req.body.username;
  res.locals.password = req.body.password;

  //save query to a const= verifyUser , which is set to 'SELECT username FROM users where username = $1
  //create values vartiable which contains an array with ${username} as the first param
  const queryUser = 'SELECT username, user_id FROM users WHERE username = $1';
  const values = [res.locals.username];
  //call query on db passing

  db.query(queryUser, values).then((verified) => {
    //if username input is not found in db, prompt user to log in again or register
    if (verified.rows.length === 0) {
      res.locals.exists = false;
      console.log("Username doesn't exist in database");
      //should return error
      return next();
    } else {
      //if username input is found in db, call the next middleware to check password
      res.locals.exists = true;
      res.locals.user_id = verified.rows[0].user_id;
      console.log('res.locals.user_id', res.locals.user_id);
      return next();
    }
  });

  //then if verify.rows.length === 0 , that means user doesn't exist
  // res.locals.exist = false
  // !== 0 then the user exist
  // call middleware that checks passswords
  //return next
};

// authcontroller.checkHashedPw = (req, res, next) => {
//   let passedInName = res.locals.username;
//   let passedInPass = res.locals.password;

//   const queryUser = 'SELECT password FROM users WHERE username = $1';

//   db.query(queryUser, [passedInName])
//     .then((pw) => {
//       bcrypt.compare(passedInPass, pw)
//         .then(function(result) {
//         // if compare is true, move on to next middleware?
//         // else redirect to Register
//     });
//   })
// }

authcontroller.checkPw = (req, res, next) => {
  if (!res.locals.exists) return next(); // should redirect to register page
  let passedInName = res.locals.username;
  let passedInPass = res.locals.password;
  console.log('res.locals.password', res.locals.password);

  const queryUser = 'SELECT * FROM users WHERE username = $1 AND password = $2';

  db.query(queryUser, [passedInName, passedInPass])
    .then((verified) => {
      console.log('verified.rows', verified.rows);
      if (verified.rows.length === 0) {
        res.locals.exists = false;
        console.log("Password doesn't exist in database");
        //should return error
        return next();
      } else {
        res.locals.exists = true;
        console.log('returned password query: ', verified.rows[0]);
        res.locals.user_id = verified.rows[0].user_id;
        // console.log('res.locals.user_id', res.locals.user_id);
        return next();
      }
    })
    .catch((error) =>
      next({
        log:
          'Express error handler caught error in maincontroller.storeUrl in db query selectUrlQuery',
        status: 400,
        message: { err: error },
      })
    );
};

authcontroller.hashPassword = (req, res, next) => {
  const { password } = req.body;

  bcrypt.hash(password, 10, (err, hashed) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log('hashed', hashed);
    res.locals.hash = hashed;
    return next();
  });
};

authcontroller.saveUser = (req, res, next) => {
  if (res.locals.exist) return next();

  const { username, phoneNumber } = req.body;

  const saveQuery =
    'INSERT INTO users (username, password, phone_number) VALUES ($1, $2, $3);';

  db.query(saveQuery, [username, res.locals.hash, phoneNumber])
    .then((saved) => {
      console.log('saved: ', saved);
      // if (saved) return next()
      return next();
    })
    .catch((error) =>
      next({
        log:
          'Express error handler caught error in maincontroller.storeUrl in db query selectUrlQuery',
        status: 400,
        message: { err: error },
      })
    );
};

module.exports = authcontroller;
