const path = require("path");
const fs = require("fs");
const maincontroller = {};
const db = require("../db/databaseIndex.js");

/*Twilio express sms docs
https://www.twilio.com/docs/sms/tutorials/how-to-send-sms-messages-node-js
*/
//node-cron/scheduler to schedule tasks

/*Timestamp for psql
https://www.sqlservertutorial.net/sql-server-date-functions/sql-server-current_time-function/
*/

/*getstatus - to be used inside middleware and node-cron
input is URL or array of URLs to ping
pings URL, saves to database
output is received status code
saveToDb - include our query to save to database, parameter will be status returned from api ping
https://www.restapitutorial.com/httpstatuscodes.html
*/

/*3) user adds in URL that they want to track
api= /addURL
req.body = will hold URL
res.status of 200 or error
default interval every hour 
backend timer: [https://nodejs.org/en/docs/guides/timers-in-node/](https://nodejs.org/en/docs/guides/timers-in-node/)
twillio API for text messages*/

//storeUrl - store URL in database, store default interval in database
maincontroller.storeUrl = (req, res, next) => {
  //receive Url from req.body, interval defaulted to 1 hour
  const Url = req.body;
  const UrlforQuery = [Url];
  let status;
  let UrlId;
  //https://www.postgresql.org/docs/9.0/dml-insert.html
  const selectUrlIdQuery = "SELECT url.url_id FROM url WHERE url.url = $1";
  db.query(selectUrlIdQuery, UrlforQuery)
    .then((data) => {
      UrlId = data;
    })
    .catch((error) =>
      next({
        log:
          "Express error handler caught error in maincontroller.storeUrl in db query selectUrlQuery",
        status: 400,
        message: { err: error },
      })
    );
  //database will insert timestamp into status table when new statu is inserted
  const addStatusQuery = "INSERT INTO status (url_id, status) VALUES ()";
  //fetch- !) ping Url, 2)if ping returns 200 message- we know Url is valid, 3)store Url in database, 4)invoke scheduler, 5)send status code to client (res.locals)
  //https://blog.logrocket.com/axios-or-fetch-api/#:~:text=To%20send%20data%2C%20fetch(),set%20in%20the%20options%20object
  fetch(Url)
    .then((res) => {
      status = res.status;
      //insert to Url table
      //insert to status table
    })
    .catch((err) => {});

  //invoke getstatus to ping url, receive status code

  next();
};

//pingUrlInterval - A- retrieve URL and interval from database, B-set timer to ping URL, C-send message to twilio if status is not 200, D- save status code and time in database
maincontroller.pingUrlInterval = (req, res, next) => {
  next();
};

//updateInterval - update interval in database
maincontroller.updateInterval = (req, res, next) => {
  next();
};

//checkUrlNow - A- ping URL, B- save status code and time in database - use URL to tell postgres where to store status code and time stamp, C-send to client URL status code in res.locals
maincontroller.checkUrlNow = (req, res, next) => {
  next();
};

/*6) - data pull[https://mdbootstrap.com/docs/react/advanced/charts/](https://mdbootstrap.com/docs/react/advanced/charts/)
get historical data from database , will be default time (we will test to determine later)
api = /historicaldata
req.body = will hold URL
res.locals = will send back 2 arrays
A)all the times URL was pinged
B)all the status codes */
//getData 5 -query the database for times and status code for url given in req.body, then save to res.locals and send back a res contiaing res.locals
maincontroller.getData = (req, res, next) => {
  next();
};

module.exports = maincontroller;
