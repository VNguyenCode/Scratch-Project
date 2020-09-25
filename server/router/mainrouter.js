const express = require('express');
const maincontroller = require('../controller/maincontroller');
const router = express.Router();


/*3) user adds in URL that they want to track
api= /addURL
req.body = will hold URL
res.status of 200 or error
default interval every hour 
backend timer: [https://nodejs.org/en/docs/guides/timers-in-node/](https://nodejs.org/en/docs/guides/timers-in-node/)
twillio API for text messages*/

//post request
//storeUrl - store URL in database, store default interval in database
//pingUrlInterval - A- retrieve URL and interval from database, B-set timer to ping URL, C-send message to twilio if status is not 200, D- save status code and time in database
//send to client success message so client can render URL component
router.post('/addURL', maincontroller.storeUrl, maincontroller.pingUrlInterval, (req, res) => {
    res.status(200).send("URL successfully added")
});

/*4) api= /interval
time will be req.body*/
//put request (to update interval)
//updateInterval - update interval in database
//pingURLInterval - A- retrieve URL and interval from database, B-set timer to ping URL, C-send message to twilio if status is not 200, D- save status code and time in database
router.put('/interval', maincontroller.updateInterval, maincontroller.pingUrlInterval, (req, res) => {
    res.status(200).send("Interval successfully changed")
});

/*5) based on user clicking on button in front end, will check current status code
api= /checknow - will be invoked on a button click
req.body = will hold the URL 
res.locals = will hold the "URL status"*/
//get request
//checkUrlNow - A- ping URL, B- save status code and time in database - use URL to tell postgres where to store status code and time stamp, C-send to client URL status code in res.locals
router.get('/checkNow', maincontroller.checkUrlNow, (req, res) => {
    res.status(200).send('test')
});


/*6) - data pull[https://mdbootstrap.com/docs/react/advanced/charts/](https://mdbootstrap.com/docs/react/advanced/charts/)
get historical data from database , will be default time (we will test to determine later)
api = /historicaldata
req.body = will hold URL
res.locals = will send back 2 arrays
A)all the times URL was pinged
B)all the status codes */
//getData 5 -query the database for times and status code for url given in req.body, then save to res.locals and send back a res contiaing res.locals
router.get('/historicalData', maincontroller.getData, (req, res) => {
    res.status(200).send('test')
});

module.exports = router;