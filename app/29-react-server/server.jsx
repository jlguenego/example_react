import express from 'express';
import serveIndex from 'serve-index';

import React from 'react';
import ReactDomServer from 'react-dom/server';

import App from './App';

const app = express();

app.get('/hello', (req, res) => {
  const html = ReactDomServer.renderToStaticMarkup(<div> Hello world! </div>);
  res.send(html);
});

app.get('/world', (req, res) => {
  const html = ReactDomServer.renderToStaticMarkup(<App />);
  res.send(html);
});

const dir = __dirname;
app.use(express.static(dir));
app.use(serveIndex(dir, { icons: true }));

app.listen(9000, () => console.log('Server started on port 9000'));
