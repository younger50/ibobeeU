var express = require('express');
var mongodb = require('mongodb');
var assert = require('assert');
var MongoClient = mongodb.MongoClient;
var db_url = 'mongodb://ibbu_dbtester1:5566@ds043982.mongolab.com:43982/ibu-test1';

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
  res.send("db connected");
  MongoClient.connect(url, function(err, db){
    assert.equal(null, err);
    console.log("connected");
    db.close();
  });
});

module.exports = router;
