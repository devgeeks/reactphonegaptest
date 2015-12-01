/* eslint no-var:0 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');

new WebpackDevServer(webpack(config), {
  hot: true,
  contentBase: 'www',
  publicPath: config.output.publicPath,
}).listen(3000, 'localhost');
