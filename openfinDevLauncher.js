const openfinLauncher = require('openfin-launcher');
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('dist'))

let runningApp = app.listen(3000, () => {
    console.log('Listening on Port 3000')
    openfinLauncher.launchOpenFin({
        configPath: 'http://localhost:3000/app.json'
    }).then(() => {
        runningApp.close()
    })
})