const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		bundle: './main.jsx',
	},
	output: {
		filename: '[name].js',
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx']
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
			}]
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [{
					loader: 'css-loader',
					options: {
						minimize: true,
						sourceMap: true,
						root: './wpk'
					}
				}, {
					loader: 'postcss-loader',
					options: {
						sourceMap: true,
					}
				}]
			})
		}, {
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [{
					loader: 'css-loader',
					options: {
						minimize: false,
						sourceMap: true,
						// root: '../img'
					}
				}, {
					loader: 'postcss-loader',
					options: {
						sourceMap: true,
					}
				}, {
					loader: 'sass-loader',
					options: {
						sourceMap: true,
					}
				}]
			})
		}, {
			// svg included in HTML files
			test: /img.html.*\.svg$/,
			use: [{
				loader: 'url-loader',
				options: {
					name: '[name].[ext]',
					limit: 10000,
					mimetype: 'image/svg+xml',
					publicPath: './wpk/'
				}
			}]
		}, {
			// svg included in CSS files (at least one of the test condition must match)
			test: [/img.css.*\.svg$/, /(fontawesome-webfont|glyphicons-halflings-regular)\.svg(\?v=\d+\.\d+\.\d+)?$/],
			use: [{
				loader: 'url-loader',
				options: {
					name: '[name].[ext]',
					limit: 10000,
					mimetype: 'image/svg+xml',
				}
			}]
		}, {
			test: /\.(png|jpg)$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					// publicPath: './wpk/',
				}
			}]
		}, {
			test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: 'url-loader',
				options: {
					name: '[name].[ext]',
					limit: 10000,
					mimetype: 'application/font-woff'
				}
			}]
		}, {
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: 'url-loader',
				options: {
					name: '[name].[ext]',
					limit: 10000,
					mimetype: 'application/octet-stream'
				}
			}]
		}, {
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				}
			}]
		}]
	},
	devtool: 'source-map',
	plugins: [
		new ExtractTextPlugin('[name].css'),
	]
};
