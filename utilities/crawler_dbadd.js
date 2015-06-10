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

/*
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
*/

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
		var lines = data.split("\n");
		var i;
		for ( i = lines.length - 1; i >= 0; i--) {
			var line = lines[i];
			line = line.replace(/NumberInt\(/g," ");
			line = line.replace(/\)/g," ");
			console.log("===============");
			console.log(line);			
			if(line!=""){
				var doc = JSON.parse("["+line+"]");
				console.log(doc[0]["_id"]);
				setTimeout(function(){
					dbinsert_temple(
				      	address=doc[0].address,
				      	area=doc[0].area,
				      	city=doc[0].city,
				      	deity=doc[0].deity,
				      	latitude=doc[0].latitude,
				      	longitude=doc[0].longitude,
				      	name=doc[0].name,
				      	religion=doc[0].religion,
				      	temple_id=doc[0].temple_id
					);
				}, 1+i*100);

			}
			console.log("---------------");
		};
		console.log(lines.length);
	});

}
/*
//temple_json_load("dbtest.json");
crlf.set(__dirname + '/temple.json', 'CRLF', function(err, endingType) {
  console.log(endingType); // LF 
  // file was using LF and now uses CRLF 
});
*/

// load
temple_json_load("temple.json");
