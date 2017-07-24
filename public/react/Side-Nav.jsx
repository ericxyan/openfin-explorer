import React from 'react';
import { Link } from 'react-router-dom';
import List, { ListItem } from 'material-ui/List';

export default class SideNav extends React.Component {
  render() {
    return (
      <div>
        <List>
          <Link to='/'><ListItem>Welcome</ListItem></Link>
          <Link to='/windows/child-window'><ListItem>Create a Child Window</ListItem></Link>
        </List>
      </div>
    );
  }
}
