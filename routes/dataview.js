var express = require('express');
var pg = require('pg');
var router = express.Router();

// GET db homepage
router.get('/', function(req, res, next) {
  date = new Date();
  res.render('dataview', {
  	title:'Database'
  });
});

// GET db show all
router.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });
});

// POST add user given data into db
router.post('/db/add', function(request, response){
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    var date = new Date();
    var timestamp = date.getTime();
    var words = request.body.words;
    console.log(words);
    // injection char filter
    words = words.replace(/['"]/g, "");
    console.log(words);
    client.query('INSERT INTO test_table ( Id, Info) VALUES ( \'Timestamp'+timestamp+'\', \''+words+'\');', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send("Add:"+words); }
    });
  });
});

// POST delete user given data from db
router.post('/db/del', function(request, response){
pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    var date = new Date();
    var timestamp = date.getTime();
    var words = request.body.words;
    console.log(words);
    // injection char filter
    words = words.replace(/['"]/g, "");
    console.log(words);
    client.query('DELETE FROM test_table WHERE Info=\''+words+'\';', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send("Del:"+words); }
    });
  });
});

/*
// DEBUG GET db create table
router.get('/db/create_table', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('CREATE TABLE test_table (Id char(50), Info char(50))', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });
});

// DEBUG GET db inset test data
router.get('/db/insert_into', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    var date = new Date();
    client.query('INSERT INTO test_table ( Id, Info) VALUES ( \'Timestamp'+date.getTime()+'\', \'Hello db\');', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });
});
*/

module.exports = router;
