var express = require('express');

// acceess mongolab by REST API
var request = require('request');
var router = express.Router();

// POST db find by address
router.post('/findadrs', function (req, res, next) {
  // retrieve query words
  words = req.body.words;
  // query through php forwarding
  collection  = "dbtemples";
  query       = "{\"address\":{\"\$regex\":\""+words+"\"}}"
  php_db      = require('../utilities/php_db.js');
  phpurl      = php_db.getURL(collection,query);
  request( {url:phpurl}, function (error, response, body) {
      if (!error && response.statusCode == 200) {
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
  // query through php forwarding
  collection  = "dbtemples";
  query       = "{\"name\":{\"\$regex\":\""+words+"\"}}"
  php_db      = require('../utilities/php_db.js');
  phpurl      = php_db.getURL(collection,query);
  request( {url:phpurl}, function (error, response, body) {
      if (!error && response.statusCode == 200) {
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
  // query through php forwarding
  collection  = "dbtemples";
  query       = "{\"city\":{\"\$regex\":\""+words+"\"}}"
  php_db      = require('../utilities/php_db.js');
  phpurl      = php_db.getURL(collection,query);
  request( {url:phpurl}, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body.length);
        res.send(body);
      }
      else{
        console.log("error");
      }
  });
});


module.exports = router;