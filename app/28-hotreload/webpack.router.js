const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.config.js');

const compiler = webpack(webpackConfig);
// eslint-disable-next-line
const router = express.Router();
router.use(webpackDevMiddleware(compiler, {
    noInfo: true, 
    publicPath: webpackConfig.output.publicPath,
}));
router.use(webpackHotMiddleware(compiler, {
    // path: './'
}));
module.exports = router;

