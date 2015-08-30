// acceess mongolab by REST API
var request = require('request');
var api_key = "sazUWtXlKYRLcswVw_i6BYQV8Ia6tyE5";
var api_raw_url = "https://api.mongolab.com/api/1/databases/ibbu-mongo1/collections/dbtest";

var query = JSON.stringify(  {"words":{ $regex:"56"}} );
console.log(query);

// v1 with query string

request(
	{
		url: api_raw_url,
		qs:{
			"q": query,
			"apiKey": api_key
		}
	}, 
	function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      console.log("===qstring end===");
    }
});

var api_url = api_raw_url+"?q="+query+"&apiKey="+api_key
console.log(api_url);

// v2 with raw url string
request(
	{
		url: api_url
	}, 
	function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      console.log("===raw url end===");
    }
});