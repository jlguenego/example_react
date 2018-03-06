import express from 'express';
import serveIndex from 'serve-index';

import React from 'react';
import ReactDomServer from 'react-dom/server';

import Html from './Html';

const app = express();

app.get(['/', '/about'], (req, res) => {
    const props = { req };
    const html = ReactDomServer.renderToStaticMarkup(<Html {...props} />);
    res.send(html);
});

const htdocs = '.';
app.use(express.static(htdocs));
app.use(serveIndex(htdocs, { icons: true }));



app.use(function (req, res, next) {
    console.log('404: Page not Found', req.url);
    next();
});

const port = 8030;
app.listen(port, function () {
    console.log('server started on port ' + port);
});
