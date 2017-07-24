import React from 'react';
import Grid from "material-ui/Grid";
import Paper from 'material-ui/Paper';

import PageContainer from './Page-Container.jsx';
import SideNav from './Side-Nav.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div id='main' className='container-fluid'>
        <div className='row no-gutters justify-content-start'>
          <div className='col-4'>
             <SideNav />
          </div>
          <div className='col-8'>
             <PageContainer />
          </div>
        </div>
      </div>);
  }
}
