import express from 'express';

import React from 'react';
import ReactDomServer from 'react-dom/server';

import App from './App';

const app = express.Router();

app.use((req, res, next) => {
	console.log('30 router !!!');
	next();
});

app.get('/hello', (req, res) => {
	const html = ReactDomServer.renderToStaticMarkup(<div> Hello world! </div>);
	res.send(html);
});

app.get('/world', (req, res) => {
	const html = ReactDomServer.renderToStaticMarkup(< App />);
	res.send(html);
});

module.exports = app;