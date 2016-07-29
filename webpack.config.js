// In webpack.config.js
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin =  require("extract-text-webpack-plugin");
// var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: __dirname + '/app/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });
var extractCSS = new ExtractTextPlugin("[name]_[id].css");


module.exports = {
  entry: [
    './app/index.js',
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.css$/, loader: extractCSS.extract('css') }
      //{ test: /\.css$/, loaders: ["style", "css"] },
      //{ test: /\.css$/, loader: "style-loader!css-loader" }
      // { test: /\.css$/, loader: ExtractTextPlugin.extract({
      //     fallbackLoader: "style-loader",
      //     loader: "css-loader"
      // }) }
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
    new CopyWebpackPlugin([
      { from: __dirname + '/site/*.html', to: __dirname + '/public/site/'},
      // Copy directory contents to {output}/to/directory/ 
      //{ from: __dirname + '/static', to: __dirname + '/public/static' },
      { from: __dirname + '/assets/images', to: __dirname + '/public/images' },
      { from: __dirname + '/assets/favicon.ico', to: __dirname + '/public/' },
    ]),
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/site/index.html',
      filename: 'site/index.html',
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/site/dashboard.html',
      filename: 'site/dashboard.html',
      inject: 'body'
    }),
    extractCSS,


  ]

}