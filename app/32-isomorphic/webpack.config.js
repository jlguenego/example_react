const config = require('../../webpack.config.js');
const path = require('path');
const webpack = require('webpack');
const {basename} = require('./basename');
console.log('basename', basename);

config.context = path.resolve(__dirname, '.');
config.output.path = path.resolve(__dirname, './wpk');

config.plugins = [...config.plugins];
config.plugins.push(new webpack.DefinePlugin({
	BASENAME: `'${basename}'`,
}));

module.exports = config;
