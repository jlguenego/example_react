const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const fs = require('fs');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// eslint-disable-next-line
const webpackRouter = express.Router();

function router(directory) {
  const webpackRouterFilename = path.resolve(directory, 'webpack.router.js');
  console.log('directory', webpackRouterFilename);
  if (fs.existsSync(webpackRouterFilename)) {
    const router = require(webpackRouterFilename);
    return router;
  }
  const webpackConfig = require(directory + '/webpack.config.js');
  webpackConfig.output.path = '/';
  const compiler = webpack(webpackConfig);
  // eslint-disable-next-line
  const router = express.Router();
  router.use('/wpk/', webpackDevMiddleware(compiler, {}));
  return router;
}

// const array = ['/app/30_bootstrap', '/app/31_injector'];
const array = ['10-state'];

// const array = fs.readdirSync('./app')
// 	.filter(file => file.match(/^\d\d-/) &&
// 		fs.lstatSync('./app/' + file).isDirectory() &&
// 		fs.existsSync('./app/' + file + '/webpack.config.js'));

console.log('array', array);

array.forEach(dir => {
  webpackRouter.use(
    '/app/' + dir,
    router(path.resolve(__dirname, 'app/' + dir))
  );
});

module.exports = webpackRouter;
