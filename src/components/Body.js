import React, { Component } from 'react';
import Typography from 'material-ui/Typography';

export default class Welcome extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Typography>
                Welcome Page
            </Typography>
        )
    }
}