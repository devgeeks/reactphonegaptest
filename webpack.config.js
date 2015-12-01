/* eslint no-var:0, strict:0 */
'use strict';

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var definePlugin = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV) || JSON.stringify('development'),
  },
});
var lessLoaders = [
  'css-loader',
  'autoprefixer-loader?browsers=last 3 versions',
  'less-loader',
];
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'www/js/bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(lessLoaders.join('!')),
        exclude: /less_includes/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules|crypton\.js/,
        loader: 'babel-loader?stage=0',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('www/css/index.css'),
    definePlugin,
  ],
};
