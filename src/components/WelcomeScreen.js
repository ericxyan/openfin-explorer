import React, { Component } from 'react';
import Typopraphy from 'material-ui/Typography';

export default class WelcomeScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Typopraphy>
                Welcome!
            </Typopraphy>
        )
    }
}