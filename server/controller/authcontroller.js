const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const db = require('../db/databaseIndex.js');

const authcontroller = {};

// middleware
// verify if user exists with the db.query to check in Postgres
// 0=  go to dashboard/ front page
authcontroller.verify = (req, res, next) => {
  console.log('req.body.username: ', req.body.username);
  res.locals.username = req.body.username;
  res.locals.password = req.body.password;

  // save query to a const= verifyUser , which is set to 'SELECT username FROM users where username = $1
  // create values vartiable which contains an array with ${username} as the first param
  const queryUser = 'SELECT username, user_id FROM users WHERE username = $1';
  const values = [res.locals.username];
  // call query on db passing

  db.query(queryUser, values).then((verified) => {
    // if username input is not found in db, prompt user to log in again or register
    if (verified.rows.length === 0) {
      res.locals.exists = false;
      console.log("Username doesn't exist in database");
      // should return error
      return next();
    }
    // if username input is found in db, call the next middleware to check password
    // res.locals.exists = true;
    res.locals.user_id = verified.rows[0].user_id;
    console.log('res.locals.user_id', res.locals.user_id);
    return next();
  });

  // then if verify.rows.length === 0 , that means user doesn't exist
  // res.locals.exist = false
  // !== 0 then the user exist
  // call middleware that checks passswords
  // return next
};

authcontroller.checkPw = (req, res, next) => {
  const passedInName = res.locals.username;
  const passedInPass = res.locals.password;

  const queryUser = 'SELECT password FROM users WHERE username = $1';

  db.query(queryUser, [passedInName]).then((dbHashPw) => {
    bcrypt.compare(passedInPass, dbHashPw.rows[0].password, (err, result) => {
      console.log('dbHashPw: ', dbHashPw);
      if (result === true) {
        // return to front end obj with username / userid
        // { user_id: res.locals.user_id, username: res.locals.username }
        res.locals.exists = true;
        res.locals.user_id = dbHashPw.rows[0].user_id;
        return next();
      } else {
        res.locals.exists = false;
        return next();
      }
    });
  });
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
