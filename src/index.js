import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { Grid } from 'material-ui';
import Headline from './components/Headline.js'
// import 'typeface-roboto'; TODO: Get this loading

function App() {
    return(
        <MuiThemeProvider>
            <Grid container>
                <Grid item>
                    <Headline />
                </Grid>
            </Grid>
        </MuiThemeProvider>
    )
}

render(
    <App />,
    document.getElementById('root')
)