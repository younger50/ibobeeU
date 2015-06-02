var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  date = new Date();
  res.render('index', { 
  	title: 'iBobeeU',
  	timenow: date.toString() });
});

module.exports = router;
