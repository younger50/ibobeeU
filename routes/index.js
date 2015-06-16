var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/1', function(req, res, next) {
  date = new Date();
  res.render('index', { 
  	title: 'iBobeeU',
  	timenow: date.toString() });
});

router.get('/', function(req, res, next) {
	//res.send("hi");
	var options = {root: __dirname + '/../views/'}
	var fileName = 'index1.html';
	res.sendFile( fileName, options);
});

router.get('/class', function(req, res, next) {
	//res.send("hi");
	var options = {root: __dirname + '/../views/'}
	var fileName = 'class.html';
	res.sendFile( fileName, options);
});

router.get('/individual', function(req, res, next) {
	//res.send("hi");
	var options = {root: __dirname + '/../views/'}
	var fileName = 'individual.html';
	res.sendFile( fileName, options);
});

module.exports = router;
