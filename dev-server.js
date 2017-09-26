const liveServer = require('live-server');
const openfinConfigBuilder = require('openfin-config-builder');
const openfinLauncher = require('openfin-launcher');
const path = require('path');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

let target;
let initialLaunch = true;

const configPath = path.resolve('dist/app.json');
const serverParams = {
    root: path.resolve('dist'),
    open: false,
    logLevel: 2,
    port: 8081,
    watch: path.resolve('dist')
};

//Update our config and launch openfin.
function launchOpenFin() {
    openfinConfigBuilder.update({
        startup_app: {
            url: target + '/index.html',
            applicationIcon: target + '/favicon.ico',
            saveWindowState: false,
            defaultWidth: 850,
            defaultHeight: 850,
            defaultTop: 50,
            defaultLeft: 10
        },
        runtime: {
            arguments: '--remote-debugging-port=9090 --v=1 --enable-logging --debug',
            version: 'community'
        },
        shortcut: {
            icon: target + '/favicon.ico'
        }
    }, configPath)
        .then(openfinLauncher.launchOpenFin({ configPath: configPath }).then(() => {
            console.log('OpenFin closed')
            watching.close(() => {
                console.log('Watcher closed')
                liveServer.shutdown();
                console.log('live-server shutdown')
            })
        })
        )
        .catch(err => console.log(err));
}

const compiler = webpack(webpackConfig);
const watching = compiler.watch({}, (err, stats) => {
    if (initialLaunch) {
        //Start the server server and launch our app.
        liveServer.start(serverParams).on('listening', () => {
            const { address, port } = liveServer.server.address();
            target = `http://localhost:${port}`;
            launchOpenFin();
        });
        initialLaunch = false;
    } else {
        console.log('Change detected, webpack recompiling...')
    }
})
