import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import ApplicationAPI from './ApplicationAPI';
import WindowAPI from './WindowAPI'
import WelcomeScreen from './WelcomeScreen';

export default class Body extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Route exact path='/' component={WelcomeScreen} />
                <Route path='/Application' component={ApplicationAPI} />
                <Route path='/Windows' component={WindowAPI} />
            </div>
        )
    }
}