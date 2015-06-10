var express = require('express');

// acceess mongolab by REST API
var request = require('request');
var api_key = "sazUWtXlKYRLcswVw_i6BYQV8Ia6tyE5";
var api_raw_url = "https://api.mongolab.com/api/1/databases/ibbu-mongo1/collections/dbtest";
var api_url = api_raw_url+"?apiKey="+api_key;
var router = express.Router();

// GET db homepage
router.get('/', function (req, res, next) {
  date = new Date();
  res.render('dataview', {
  	title:'Database'
  });
});

// show all data in db mongolab
router.get('/db', function (req, res, next) {
  // through mongolab REST API
  request( api_url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      res.send(body);
    }
  });
});

// add user given data into db
router.post('/db/add', function (req, res){
  // injection char filter
  var words = req.body.words;  
  words = words.replace(/['"]/g, "");
  console.log(words);
  // requset POST to mlab API as data insert
  request( 
    { 
      url: api_url, 
      method: "POST", 
      json: {"words":words}
    }, 
    function (error, response, body) {
      console.log(body);
      res.send(body);
  });
});

// delete user given data from db
router.post('/db/del', function (req, res){
  // injection char filter
  var words = req.body.words;  
  words = words.replace(/['"]/g, "");
  console.log(words);
  // requset GET to mlab API as data searc
  url = api_raw_url+"?q="+JSON.stringify({"words":words})+"&apiKey="+api_key;
  //console.log(url);
  request( url, 
    function (error, response, body) {
      //console.log(body);
      body = JSON.parse(body);
      for (var i = 0; i < body.length; i++) {
        var data = body[i];
        // delete data by specific id
        url = api_raw_url+"/"+data["_id"]["\$oid"]+"?apiKey="+api_key;
        request( 
        {
          url:url,
          method:"DELETE"
        }, function (error, response, body) {
          console.log(body);
        });
      };
      res.send(body);
  });
});

module.exports = router;
