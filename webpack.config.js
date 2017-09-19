/* global __dirname, require, module */
const path = require('path')
const BUILD_DIR = path.resolve(__dirname, 'app')
const APP_DIR = path.resolve(__dirname, 'src/')
var ExtractTextPlugin = require('extract-text-webpack-plugin')


const config = {
  // This is the setting for electron.
  target: "electron",
  entry: {
    app: APP_DIR + '/index.js'
  },

  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  module: {
    
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: './css/[name].css',
      allChunks: true,
    }),
  ],
}

module.exports = config
