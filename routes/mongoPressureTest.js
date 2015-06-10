var express = require('express');

// acceess mongolab by REST API
var request = require('request');
var api_key = "YXbD6RBoICYSyTacuCIYQ5cbk0eD4TsX";
var api_raw_url = "https://api.mongolab.com/api/1/databases/ibu-test1/collections/dbtest";
var api_url = api_raw_url+"?apiKey="+api_key;
var router = express.Router();


// POST add many users given data into db for test by Sandy 2015/06/10
router.get('/addMany', function (req, res, next){
	console.log("this is a test!!!");
  
  for(var i=10;i<300;i++){
	  var date = new Date();
	  var timestamp = date.getTime();
	  var words = "test"+i;
	  console.log(words);
	  // injection char filter
	  //words = words.replace(/['"]/g, "");
	  //console.log(words);
	  // requset POST to mlab API
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
  }
});

module.exports = router;