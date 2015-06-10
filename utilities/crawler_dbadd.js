var express = require('express');


// acceess mongolab by REST API
var request = require('request');
var api_key = "sazUWtXlKYRLcswVw_i6BYQV8Ia6tyE5";
var api_raw_url = "https://api.mongolab.com/api/1/databases/ibbu-mongo1/collections/";
var api_url = api_raw_url+"dbtest"+"?apiKey="+api_key;
var temple_url =  api_raw_url+"dbtemples"+"?apiKey="+api_key;

// json load and string porcessing
var fs = require('fs');
var utf8 = require('utf8');
var crlf = require('crlf');


function dbinsert_w(words){
  request( 
    { 
      url: api_url, 
      method: "POST", 
      json: {"words":words}
    }, 
    function (error, response, body) {
      console.log(body);
  });
}


// db presure test
for(i=0;i<500;i++){
	dbinsert_w("younger_testing"+i.toString());
}

/*
// temple load test
function dbinsert_temple( address, area, city, deity, latitude, longitude, name, religion, temple_id){
  request( 
    { 
      url: temple_url, 
      method: "POST", 
      json: 
      {
      	"address": address,
      	"area": area,
      	"city": city,
      	"deity": deity,
      	"latitude": latitude,
      	"longitude": longitude,
      	"name": name,
      	"religion": religion,
      	"temple_id": temple_id
      }
    }, 
    function (error, response, body) {
      console.log(body);
  });
}

function temple_json_load(filename){
	fs.readFile( filename, 'utf8', function (err, data){
		//console.log(data);
		var lines = data.split("\r\n|\r|\n");
		var i;
		for ( i = lines.length - 1; i >= 0; i--) {
			var line = lines[i];
			console.log(line);			
			if(line!=""){
				var doc = JSON.parse("["+line+"]");
				console.log("===============");
				console.log(doc[0]["_id"]);
				console.log("---------------");
			}
		};
		console.log(lines.length);
	});

}

//temple_json_load("dbtest.json");
//temple_json_load("temple.json");
*/