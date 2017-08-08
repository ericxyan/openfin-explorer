const liveServer = require('live-server');
const openfinConfigBuilder = require('openfin-config-builder');
const openfinLauncher = require('openfin-launcher');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

let target;
const configPath = path.resolve('dist/app.json');
const serverParams = {
    root: path.resolve('dist'),
    open: false,
    logLevel: 2,
    port: 8081
};

const compiler = webpack(webpackConfig);

const watching = compiler.watch({
}, (err, stats) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Launching...');
        liveServer.start(serverParams).on('listening', () => {
            const { address, port } = liveServer.server.address();
            target = `http://localhost:${ port }`;
            openfinLauncher.launchOpenFin({ configPath: configPath }).then(() => {
                watching.close(() => {
                    liveServer.shutdown();
                })
            });
        });
    }
});

