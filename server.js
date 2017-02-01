// require dependencies
var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');
var port = 8090;

// use ejs and express layouts
// app.set('view engine', 'ejs');
// app.use(expressLayouts);

var router = require('./app/routes');
app.use('/', router);

// set static files (css and images, etc) location
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function() {
	console.log('app started');
});