/**
 * Created by Andrei_Furs on 11/25/2016.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var helpers = require('./helpers');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry:[
    './app/main.ts',
    './app/index.scss'
  ],
  output: {
    path: './dist/app',
    filename: '[name].js'
  },
  stats: {
    errorDetails: true
  },
  resolve: {
    extensions: ['.ts', '.css', '.scss', '.html', '']
  },
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?url=false!postcss-loader!sass-loader')
      }
    ]
  },
  tslint: {
     configFile: 'tslint.json'
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
  plugins: [

    new ExtractTextPlugin('styles.css'),

    new CopyWebpackPlugin([
      {
        from: './app.js',
        to: '../app.js'
      }
    ]),

    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};