const express = require('express');
const authcontroller = require('../controller/maincontroller');
const router = express.Router();

/*1) will pull username and password from input box
url= /login, info will come in req.body
response is 200 status/error status
200= go to dashboard/front page
error status= direct back to sign up page*/

/*2) api= /register, 
req.body = username, password, phoneNumber
middleware will validate whether username or phone number is already taken
store username, etc in database
send to frontend- res.status 200 or error*/


module.exports = router;