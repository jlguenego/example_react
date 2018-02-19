const express = require('express');
const serveIndex = require('serve-index');
const bodyParser = require('body-parser');
const webpackRouter = require('./webpack.router.js');

var app = express();
app.use(bodyParser.json());

app.use(webpackRouter);


// var slowUrl = ['/app/25_compiling_lifecycle/tmpl/*'];

// app.all(slowUrl, function(req, res, next) {
// 	console.log('slow url - req.url', req.url);
// 	setTimeout(function() {
// 		next();
// 	}, 2000);
// });

app.use(function(req, res, next) {
	console.log('req.url', req.url);
	next();
});

// var ws16 = require('./app/16_jlg-load-pictures/ws/index.js');
// app.use('/app/16_jlg-load-pictures/ws', ws16);

// var ws18 = require('./app/18_log/ws/index.js');
// app.use('/app/18_log/ws', ws18);

const htdocs = '.';
app.use(express.static(htdocs));
app.use(serveIndex(htdocs, {icons: true}));

app.use(function(req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

var port = 8000;
app.listen(port, function() {
	console.log('server started on port ' + port);
});
