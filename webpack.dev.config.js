/* eslint no-var:0, strict:0 */
'use strict';

var webpack = require('webpack');
var path = require('path');
var definePlugin = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV) || JSON.stringify('development'),
  },
});
var lessLoaders = [
  'style',
  'css-loader',
  'autoprefixer-loader?browsers=last 3 versions',
  'less-loader',
];
module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    path: __dirname,
    filename: 'www/js/bundle.js',
    publicPath: '/js/',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js'],
    alias: {
      'actions': __dirname + '/src/actions/',
      'components': __dirname + '/src/components/',
      'containers': __dirname + '/src/containers/',
      'reducers': __dirname + '/src/reducers/',
      'utils': __dirname + '/src/utils/',
    },
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: lessLoaders.join('!'),
        exclude: /less_includes/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src'),
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    definePlugin,
  ],
};
