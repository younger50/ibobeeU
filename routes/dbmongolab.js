var express = require('express');

// acceess mongolab by REST API
var request = require('request');
var api_key = "YXbD6RBoICYSyTacuCIYQ5cbk0eD4TsX";
var find_api_url = "https://api.mongolab.com/api/1/databases/ibu-test1/collections/dbtest?apiKey="+api_key;
var inst_api_url = "https://api.mongolab.com/api/1/databases/ibu-test1/collections/dbtest?apiKey="+api_key;
var router = express.Router();

// GET db homepage
router.get('/', function (req, res, next) {
  date = new Date();
  res.render('dataview', {
  	title:'Database'
  });
});

// GET db show all
router.get('/db', function (req, res, next) {
  // through mongolab REST API
  request( find_api_url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
      res.send(body);
    }
  });
});

// POST add user given data into db
router.post('/db/add', function (req, res){
  var date = new Date();
  var timestamp = date.getTime();
  var words = req.body.words;
  console.log(words);
  // injection char filter
  words = words.replace(/['"]/g, "");
  console.log(words);
  // requset POST to mlab API
  request( 
    { 
      url: inst_api_url, 
      method: "POST", 
      json: {"words":words}
    }, 
    function (error, response, body) {
    console.log(body);
    res.send(body);
  });
});

// POST delete user given data from db
router.post('/db/del', function(request, response){

});

module.exports = router;
