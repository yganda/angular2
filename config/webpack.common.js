/**
 * Created by Andrei_Furs on 11/25/2016.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var autoprefixer = require('autoprefixer');
var helpers = require('./helpers');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry:[
    './src/main.ts'
  ],
  output: {
    path: './dist/src',
    filename: '[name].js'
  },
  stats: {
    errorDetails: true
  },
  resolve: {
    extensions: ['.ts', '.js', '.css', '.scss', '.html', '']
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
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          compact: false
        }
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['raw-loader', 'sass-loader', 'postcss-loader']
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader?url=false'
      }
    ]
  },
  imageWebpackLoader: {
      mozjpeg: {
          quality: 65
      },
      pngquant:{
          quality: "65-90",
          speed: 4
      },
      svgo:{
          plugins: [
              {
                  removeViewBox: false
              },
              {
                  removeEmptyAttrs: false
              }
          ]
      }
  },
  tslint: {
     configFile: 'tslint.json'
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
  plugins: [

    new CleanWebpackPlugin(['dist'], {
      root: process.cwd()
    }),

    new CopyWebpackPlugin([
      {
        from: './app.js',
        to: '../app.js'
      }
    ]),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
