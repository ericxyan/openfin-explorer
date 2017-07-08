import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

let helloWorldApp

function openApplicationDocs() {
    fin.desktop.System.openUrlWithBrowser('http://cdn.openfin.co/jsdocs/stable/fin.desktop.Application.html',
        () => { console.log('URL Opened') },
        (error) => { console.log(error) });
}

function openHelloWorldApp() {
    helloWorldApp = new fin.desktop.Application({
        url: 'http://localhost:3000/helloworld.html',
        uuid: 'my-unique-identifier-helloworld',
        name: 'Hello World App',
        mainWindowOptions: {
            autoShow: true
        }
    }, () => {
        helloWorldApp.run(() => { console.log('Successful launch') }, (error) => { console.log(error) });
    }, (error) => {
        console.log(error);
    })
}

function closeHelloWorldApp() {
    helloWorldApp.close();
}

export default function ApplicationAPI () {
    return(
        <Grid container>
            <Grid item xs={12}>
                <Typography type='title'>
                    <Icon>apps</Icon> Applications On OpenFin
                </Typography>
                <Typography type='subheading'>
                    The <code>Application</code> class allows developers to create and control an OpenFin app.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Paper>
                    <Typography>
                        For the full docuementation go to our <span onClick={openApplicationDocs}>Docs</span>
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Typography>
                    Manifest
                </Typography>
                <Typography>
                    The manifest is a configurable launch point for your application.
                </Typography>
                <Button onClick={openHelloWorldApp}>Open Hello World</Button>
                <Button onClick={closeHelloWorldApp}>Close Hello World</Button>
            </Grid>
        </Grid>
    )
}