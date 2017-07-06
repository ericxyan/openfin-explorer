import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { Grid } from 'material-ui';
import Navigation from './components/Navigation.js';
import Body from './components/Body.js';
// import 'typeface-roboto'; TODO: Get this loading

function App() {
    return(
        <MuiThemeProvider>
            <Grid container>
                <Grid item xs={4}>
                    <Navigation />
                </Grid>
                <Grid item xs={8}>
                    <Body />
                </Grid>
            </Grid>
        </MuiThemeProvider>
    )
}

render(
    <App />,
    document.getElementById('root')
)