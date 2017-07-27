const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
    { from: 'cdn-app.json', to: 'app.json' }
])

module.exports = {
  entry: {
    app: './public/js/index.js'
  },
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, CopyWebpackPluginConfig],
  devServer: {
    port: 8081
  }
}
