var express = require('express');
var request = require('request');

var get_sample = "https://api.mongolab.com/api/1/databases/ibu-test1/collections/dbtest?apiKey=YXbD6RBoICYSyTacuCIYQ5cbk0eD4TsX"

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
  //
  request( get_sample, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
      res.send(body);
    }
  });
});

module.exports = router;
