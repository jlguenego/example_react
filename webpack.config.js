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
    bundle21: './app/21-bubbling/main.jsx',
    bundle22: './app/22-life-cycle/main.jsx',
    bundle23: './app/23-store/main.jsx',
    bundle24: './app/24-jlgux/main.jsx',
    bundle25: './app/25-flux/main.jsx',
    bundle26: './app/26-redux/main.jsx',
    bundle27: './app/27-controlled-uncontrolled/main.jsx',
    bundle28: './app/28-hotreload/main.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
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
