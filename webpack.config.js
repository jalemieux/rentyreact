// In webpack.config.js
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
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
      { test: /\.json$/, loader: "json-loader" }
    ] 
  },
  resolve: {
    modulesDirectories: ['node_modules'],
  },
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/public'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/site/index.html',
      filename: __dirname + '/public/site/main.html',
      inject: 'body'
    }),
    new CopyWebpackPlugin([
      // Copy directory contents to {output}/to/directory/ 
      { from: __dirname + '/static', to: __dirname + '/public/static' },
      { from: __dirname + '/assets/images', to: __dirname + '/public/images' },
      { from: __dirname + '/assets/favicon.ico', to: __dirname + '/public/' },
    ]),
  ]

}