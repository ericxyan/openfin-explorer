import React from 'react';
import Grid from "material-ui/Grid";
import Paper from 'material-ui/Paper';

import PageContainer from './Page-Container.jsx';
import SideNav from './Side-Nav.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div id='main'>
        <Grid container gutter={0}>
          <Grid item xs={12} sm={4}>
             <SideNav />
          </Grid>
          <Grid item xs={12} sm={8}>
             <PageContainer />
          </Grid>
        </Grid>
      </div>);
  }
}
