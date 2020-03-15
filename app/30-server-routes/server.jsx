import express from 'express';
import wdm from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from './webpack.config';

import React from 'react';
import ReactDomServer from 'react-dom/server';

import { Html } from './Html';

const app = express();

const compiler = webpack(webpackConfig);
app.use('/dist/', wdm(compiler, {}));

app.get(['/', '/about'], (req, res) => {
  console.log('calling the React app:', req.url);
  const props = { req };
  const html = ReactDomServer.renderToStaticMarkup(<Html {...props} />);
  res.send(html);
});

app.listen(9000, () => console.log('Server started on port 9000'));
