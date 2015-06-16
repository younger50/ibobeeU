var express = require('express');

// acceess mongolab by REST API
var request = require('request');
var api_key = "sazUWtXlKYRLcswVw_i6BYQV8Ia6tyE5";
var api_raw_url = "https://api.mongolab.com/api/1/databases/ibbu-mongo1/collections/dbtemples";
var api_url = api_raw_url+"?apiKey="+api_key;
var router = express.Router();

// POST db find by address
router.post('/findadrs', function (req, res, next) {
  // retrieve query words
  words = req.body.words;
  // query monglab through url api
  request( api_url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // do query / parsing with node js
        body = JSON.parse(body);
        for (var i = 0; i < body.length; i++) {
          item = body[i];
          if(item.address){
            if(item.address.indexOf(words)>-1){
              //console.log(item);
            }
            else{
              body.splice(i,1);
              i--;
            }
          }else{
            body.splice(i,1);
            i--;
          }
        }
        body = JSON.stringify(body);
        console.log(body.length);
        res.send(body);
      }
      else{
        console.log("error");
      }
  });
});


// POST db find by key words
router.post('/findkey', function (req, res, next) {
  // retrieve query words
  words = req.body.words;
  // query monglab through url api
  request( api_url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // do query / parsing with node js
        body = JSON.parse(body);
        for (var i = 0; i < body.length; i++) {
          item = body[i];
          if(item.address){
            if(item.name.indexOf(words)>-1){
              //console.log(item);
            }
            else{
              body.splice(i,1);
              i--;
            }
          }else{
            body.splice(i,1);
            i--;
          }
        }
        body = JSON.stringify(body);
        console.log(body.length);
        res.send(body);
      }
      else{
        console.log("error");
      }
  });
});

// POST db find by key area
router.post('/findarea', function (req, res, next) {
  console.log(req.body);
  res.send("dbtmeple findbyarea");
});


module.exports = router;