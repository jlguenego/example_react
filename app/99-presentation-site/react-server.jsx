import express from 'express';

import React from 'react';
import ReactDomServer from 'react-dom/server';

import Html from './Html';

const app = express.Router();

import { basename } from './basename';


app.get(['/', '/examples', '/services', '/contact'], (req, res) => {
    console.log('calling the React app:', req.url, req.originalUrl);
    const props = { basename, url: req.url };
    const html = '<!DOCTYPE html>' + ReactDomServer.renderToStaticMarkup(<Html {...props} />);
    console.log(html);
    // res.send(html);
    res.sendFile('./index.html', { root: __dirname });
});

module.exports = app;

