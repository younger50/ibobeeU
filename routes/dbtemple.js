var express = require('express');

// acceess mongolab by REST API
var request = require('request');
var router = express.Router();

// POST db find by address
router.post('/findadrs', function (req, res, next) {
  // retrieve query words
  words = req.body.words;
  collection  = "dbtemples";
  query       = "{\"address\":{\"\$regex\":\""+words+"\"}}"
  php_db      = require('../utilities/php_db.js');
  phpurl      = php_db.getURL(collection,query);
  request( {url:phpurl}, function (error, response, body) {
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
  collection  = "dbtemples";
  query       = "{\"name\":{\"\$regex\":\""+words+"\"}}"
  php_db      = require('../utilities/php_db.js');
  phpurl      = php_db.getURL(collection,query);
  request( {url:phpurl}, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // do query / parsing with node js
        body = JSON.parse(body);
        for (var i = 0; i < body.length; i++) {
          item = body[i];
          if(item.name){
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
  // retrieve query words
  words = req.body.words;
  collection  = "dbtemples";
  query       = "{\"city\":{\"\$regex\":\""+words+"\"}}"
  php_db      = require('../utilities/php_db.js');
  phpurl      = php_db.getURL(collection,query);
  request( {url:phpurl}, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // do query / parsing with node js
        body = JSON.parse(body);
        for (var i = 0; i < body.length; i++) {
          item = body[i];
          if(item.city){
            if(item.city.indexOf(words)>-1){
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


module.exports = router;