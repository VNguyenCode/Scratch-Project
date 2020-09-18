const express = require('express');
const authcontroller = require('../controller/authcontroller');
const router = express.Router();

/* Iteration Option: We have not touched this, only laid the framework for authentication. */

/*1) will pull username and password from input box
url= /login, info will come in req.body
response is 200 status/error status
error status= direct back to sign up page*/

router.post(
  '/login',
  authcontroller.verify,
  authcontroller.checkPw,
  (req, res) => {
    if (!res.locals.exists) res.send('username or password does not match');
    else
      res.send({ user_id: res.locals.user_id, username: res.locals.username });
  }
);

router.post(
  '/signup',
  authcontroller.hashPassword,
  authcontroller.saveUser,
  (req, res) => {
    res.redirect('/');
  }
);

module.exports = router;
