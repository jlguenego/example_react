const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle10: './app/10-state/main.jsx',
    bundle11: './app/11-event/main.jsx',
    bundle12: './app/12-if/main.jsx',
    bundle13: './app/13-list/main.jsx',
    bundle14: './app/14-form/main.jsx',
    bundle15: './app/15-form-select-textarea/main.jsx',
    bundle16: './app/16-lifting-state/main.jsx',
    bundle17: './app/17-heritage/main.jsx',
    bundle18: './app/18-composition/main.jsx',
    bundle19: './app/19-ref/main.jsx',
    bundle20: './app/20-bind/main.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss?$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        // svg included in HTML files
        test: /img.html.*\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 10000,
              mimetype: 'image/svg+xml',
              publicPath: './wpk/',
            },
          },
        ],
      },
      {
        // svg included in CSS files (at least one of the test condition must match)
        test: [
          /img.css.*\.svg$/,
          /(fontawesome-webfont|glyphicons-halflings-regular)\.svg(\?v=\d+\.\d+\.\d+)?$/,
        ],
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 10000,
              mimetype: 'image/svg+xml',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              // publicPath: './wpk/',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 10000,
              mimetype: 'application/octet-stream',
            },
          },
        ],
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
  plugins: [new MiniCssExtractPlugin()],
  devServer: {
    contentBase: __dirname,
    publicPath: '/dist',
    compress: true,
    port: 9000,
    serveIndex: true,
  },
};
