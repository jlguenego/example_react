const webpack = require('webpack');
const config = require('../../webpack.config.js');
const path = require('path');

config.context = path.resolve(__dirname, '.');
config.output.path = path.resolve(__dirname, './wpk');
config.output.publicPath = '/wpk/';

config.entry = {
	bundle: [
		'webpack-hot-middleware/client?path=http://localhost:8000/app/28-hotreload/__webpack_hmr',
		'./main.jsx'
	]
};

config.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = config;
