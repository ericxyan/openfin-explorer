import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import List, { ListItem, ListItemText } from 'material-ui/List';

export default class Navigation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <List>
                <ListItem>
                    <Link to='/Application'>
                        <ListItemText primary="Application" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to='/Windows'>
                        <ListItemText primary="Windows" />
                    </Link>
                </ListItem>
            </List>
        )
    }
}