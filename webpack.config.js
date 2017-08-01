const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlIndexFilePlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
});
const HtmlChildFilePlugin = new HtmlWebpackPlugin({
  template: './public/child.html',
  filename: 'child.html',
  inject: 'body'
});

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
    { from: 'cdn-app.json', to: 'app.json' }
]);

module.exports = {
  entry: {
    index: './public/js/index.js',
    child: './public/js/child.js'
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name]_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ }
    ]
  },
  plugins: [HtmlIndexFilePlugin, HtmlChildFilePlugin, CopyWebpackPluginConfig],
  devServer: {
    port: 8081
  }
}
