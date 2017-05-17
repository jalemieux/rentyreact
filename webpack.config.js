// In webpack.config.js
var HtmlWebpackPlugin = require('html-webpack-plugin')

var CopyWebpackPlugin = require('copy-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});



module.exports = {
  entry: [
    './app/index.js',
    //'./app/components/account.js'
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.json$/, exclude: [], loader: "json-loader"}
    ] 
  },
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new CopyWebpackPlugin([
        { from: 'static' }
    ])
  ],
  devServer: {
      historyApiFallback: true
  }

}