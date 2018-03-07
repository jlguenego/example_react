const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const reactServer = require('./react-server');

let webpackConfig = require('./webpack.config.js');

const compiler = webpack(webpackConfig);
// eslint-disable-next-line
const router = express.Router();
router.use(webpackDevMiddleware(compiler, {
    noInfo: true, 
    publicPath: '/wpk/',
}));
router.use(reactServer);
module.exports = router;
