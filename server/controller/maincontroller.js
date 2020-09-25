const path = require("path");
const fs = require("fs");
const maincontroller = {};
const db = require("../db/databaseIndex.js");



/*REQUEST/RESPONSE MIDDLEWARE*/

//storeUrl - store URL in database, store default interval in database
maincontroller.saveUrl = (req, res, next) => {
  //receive Url from req.body, interval defaulted to 1 hour
  //let status;
  let userId = req.body.user_id;//recieved from state
  //https://www.postgresql.org/docs/9.0/dml-insert.html
  const updateUrlTable = "INSERT INTO url (user_id,url) VALUES ($1, $2) RETURNING url_id";
  db.query(updateUrlTable, [userId, req.body.url])
    .then((saved) => {
      res.locals.urlId = saved.rows.urlId
    })//MAKE SURE url IS LOWERCASE ON FRONTEND REQUEST OBJECT
    .catch((error) =>
      next({
        log:
          "Express error handler caught error in maincontroller.saveURL",
        status: 400,
        message: { err: error },
      })
    )
}


maincontroller.pingUrl = (req, res, next) => {
fetch(req.body.url)//recieved from state
  .then( data => data.json())
  .then((response) => {
    res.locals.status = response.status;
    return next();
  })
  .catch((error) =>
  next({
    log:
      "Express error handler caught error in maincontroller.pingUrl",
    status: 400,
    message: { err: error },
  })
)
}

// //database will insert timestamp into status table when new statu is inserted
// const addStatusQuery = "INSERT INTO status (url_id, status) VALUES ()";
// //fetch- !) ping Url, 2)if ping returns 200 message- we know Url is valid, 3)store Url in database, 4)invoke scheduler, 5)send status code to client (res.locals)
// //https://blog.logrocket.com/axios-or-fetch-api/#:~:text=To%20send%20data%2C%20fetch(),set%20in%20the%20options%20object
// //invoke getstatus to ping url, receive status code

maincontroller.addStatus = (req,res,next) => {
  let time = Date.now();
  let urlId = res.locals.urlId 
  let status = res.locals.status
  const updateStatusTable = "INSERT INTO status (url_id,status,time) VALUES ($1, $2, $3)";

  db.query(updateStatusTable, [url_id, status, time])
  .then(() => {
    return next();
  })//MAKE SURE url IS LOWERCASE ON FRONTEND REQUEST OBJECT
  .catch((error) =>
    next({
      log:
        "Express error handler caught error in maincontroller.addStatus",
      status: 400,
      message: { err: error },
    })
  )
} 


/*TASK SCHEDULER MIDDLEWARE*/

maincontroller.startTasks = () => {
  return maincontroller.pingAll('test')
  const allUrls = "SELECT url_id,url FROM url";

  db.query(allUrls)
  .then((urlCollection) => {
    this.pingAll(urlCollection.rows);
  })//MAKE SURE url IS LOWERCASE ON FRONTEND REQUEST OBJECT
  .catch((error) =>
    console.log('Error in Task Schduler query: ',error)
  )
}


 maincontroller.pingAll = (urlArr) => {
   return maincontroller.saveStatus(urlArr)
  for (let i=0; i < UrlArr.length;i++){
    fetch(urlArr[i.url])
    .then( data => data.json())
    .then(response => {
      urlArr[i.status] = response.status;
      this.saveStatus(urlArr);
    })
    .catch((error) =>
    console.log('Error in Task Schduler query: ',error)
  )

  }
}



 maincontroller.saveStatus = (updatedUrlArr) => {
   return console.log(updatedUrlArr)
  for (let i = 0; i < updatedUrlArr.length;i++){
    let time = Date.now();
    let urlId = updatedUrlArr[i.url_id] 
    let status = updatedUrlArr[i.status]
    const updateStatusTable = "INSERT INTO status (url_id,status,time) VALUES ($1, $2, $3) RETURNING";
    db.query(updateStatusTable, [urlId, status, time])
    .then(() => {
      console.log('Ping task completed: ', time)
    })
    .catch((error) =>
    console.log('Error in Task Schduler query: ',error)
  )
  }
}











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

//Users Table 
// //username password phonenumber user_id 
//   cam       hi        714722      1

// Send User_ID -> Client -> User_ID into State 

// URL Table
// //URL_ID URL_Link     User_Id
//     1     google.com    1
    
//select * from users where username == passedInName AND password = encrypted version of passedInPass

//Register username: cam pw: hello -> 7yxf
//Saved in DB 

//Login 
//cam hello -> 7yxf, bcrypt adds salt register
//updateInterval - update interval in database
maincontroller.updateInterval = (req, res, next) => {
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






