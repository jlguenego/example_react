import express from 'express';

import React from 'react';
import ReactDomServer from 'react-dom/server';

import Html from './Html';

const app = express.Router();

app.get(['/', '/about'], (req, res) => {
    const props = { req };
    const html = ReactDomServer.renderToStaticMarkup(<Html {...props} />);
    res.send(html);
});

module.exports = app;

