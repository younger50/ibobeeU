var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
//var dbviews = require('./routes/dataview');
var dbviews = require('./routes/dbmongolab');
//var dbpressureTest = require('./routes/mongoPressureTest');
var dbtemple = require('./routes/dbtemple');
var dbpostclassification = require('./routes/dbpostclassification');
var dbpostclassification_temple = require('./routes/dbpostclassification_temple');
var dbpostclassification_religion = require('./routes/dbpostclassification_religion');
var dbpostfindTemplesByRange = require('./routes/dbpostfindTemplesByRange');

var app = express();
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/data', dbviews);
app.use('/data/temple', dbtemple);
app.use('/test/data/postclassification', dbpostclassification);
app.use('/test/data/postclassification', dbpostclassification_temple);
app.use('/test/data/postclassification', dbpostclassification_religion);
app.use('/test/data/findTemplesByRange', dbpostfindTemplesByRange);
//app.use('/pressureTest', dbpressureTest);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
