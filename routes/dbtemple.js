var express = require('express');

// acceess mongolab by REST API
var request = require('request');
var api_key = "sazUWtXlKYRLcswVw_i6BYQV8Ia6tyE5";
var api_raw_url = "https://api.mongolab.com/api/1/databases/ibbu-mongo1/collections/dbtemples";
var api_url = api_raw_url+"?apiKey="+api_key;
var router = express.Router();

// GET db homepage
router.get('/', function (req, res, next) {
  date = new Date();
  res.send("dbtmeple");
});

// POST db find by address
router.post('/findadrs', function (req, res, next) {
  date = new Date();
  //console.log(req.body);
  words = req.body.words;
  q_string = "{\"address\":{$regex:\".*"+words+".*\"}}";
  q_url = api_raw_url+"?q="+q_string+"&apiKey="+api_key;
  console.log(q_url);
  // query monglab through url api
  request( 
    { 
      url: q_url
    }, 
    function (error, response, body) {
      console.log(body);
      res.send(body);
  });
});


// POST db find by key words
router.post('/findkey', function (req, res, next) {
  date = new Date();
  //console.log(req.body);
  words = req.body.words;
  q_string = "{\"name\":{$regex:\".*"+words+".*\"}}";
  q_url = api_raw_url+"?q="+q_string+"&apiKey="+api_key;
  console.log(q_url);
  // query monglab through url api
  request( 
    { 
      url: q_url
    }, 
    function (error, response, body) {
      console.log(body);
      res.send(body);
  });
});

// POST db find by key area
router.post('/findarea', function (req, res, next) {
  date = new Date();
  console.log(req.body);
  res.send("dbtmeple findbyarea");
});


module.exports = router;