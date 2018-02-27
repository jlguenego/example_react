const webpack = require('webpack');
const config = require('../../webpack.config.js');
const path = require('path');

config.context = path.resolve(__dirname, '.');
config.output.path = path.resolve(__dirname, './wpk');
config.output.publicPath = 'http://localhost:8000/app/28-hotreload/wpk/';

config.entry = {
	bundle: [
		'webpack-hot-middleware/client?path=./__what',
		'./main.jsx'
	]
};

config.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = config;
