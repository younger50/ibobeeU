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
  res.send("dbtmeple");
});


module.exports = router;