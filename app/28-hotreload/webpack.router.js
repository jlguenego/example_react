const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

let webpackConfig = require('./webpack.config.js');
webpackConfig = {...webpackConfig};

webpackConfig.output.publicPath = 'http://localhost:8000/app/28-hotreload/wpk/';

webpackConfig.entry = {
	bundle: [
		'webpack-hot-middleware/client?path=./__what',
		'./main.jsx'
	]
};

webpackConfig.plugins = webpackConfig.plugins.slice();
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

const compiler = webpack(webpackConfig);
// eslint-disable-next-line
const router = express.Router();
router.use(webpackDevMiddleware(compiler, {
    noInfo: true, 
    publicPath: '/wpk/',
}));
router.use(webpackHotMiddleware(compiler, {
    // log: true,
    path: '/__what',
}));
module.exports = router;
