import express from 'express';
import serveIndex from 'serve-index';

import React from 'react';
import ReactDomServer from 'react-dom/server';

import App from './App';

const app = express();

const htdocs = '.';
app.use(express.static(htdocs));
app.use(serveIndex(htdocs, {icons: true}));

app.get('/hello', (req, res) => {
    const html = ReactDomServer.renderToStaticMarkup(<div>Hello world!</div>);
    res.send(html);
});

app.get('/world', (req, res) => {
    const html = ReactDomServer.renderToStaticMarkup(<App />);
    res.send(html);
});

app.use(function(req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

const port = 8030;
app.listen(port, function() {
	console.log('server started on port ' + port);
});
