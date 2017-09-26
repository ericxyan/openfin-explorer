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
    { from: 'cdn-app.json', to: 'app.json' },
    { from: './public/notification.html', to: 'notification.html' },
    { from: './public/iabPublisher.html', to: 'iabPublisher.html' },
    { from: './public/iabSubscriber.html', to: 'iabSubscriber.html' }
]);

module.exports = [{
    entry: {
        index: './public/js/index.tsx',
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name]_bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    plugins: [HtmlIndexFilePlugin, CopyWebpackPluginConfig]
},
{
    entry: {
        child: './public/js/child.tsx'
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name]_bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    plugins: [HtmlChildFilePlugin]
}];
