var express = require('express');
var router = express.Router();

/* GET db */
router.get('/', function(req, res, next) {
  date = new Date();
  res.render('dataview', {
  	title:'Data View'
  });
});

module.exports = router;
