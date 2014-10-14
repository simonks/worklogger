var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var simpledb = require('mongoose-simpledb');
var routes = require('./routes/index');
// Loa
simpledb.init();
// Instantiate the express engine
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/createUser', rountes);
app.use('/showNotes', routes);
app.use('/showLog', routes);
app.use('/addNote', routes);

app.use(function(req, res, next){
	// Catch 404 errors
	var error = new Error('Not Found');
	err.status = 404;
	next(err);
});

if (app.get('env') === 'development'){
	app.use(function(err, req, res, next){
		req.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

app.use(function(err, req, res, next){
	res.status(err.status || 500);
	res.render('error', {
		message: err.message
		error: {}
	});
});

app.listen(3000);
