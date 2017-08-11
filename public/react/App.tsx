import * as React from 'react';
import { HashRouter } from 'react-router-dom';

import PageContainer from './Page-Container';
import SideNav from './Side-Nav';
var inititalData = require('../content.json');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  makeSideNavData() {
    let navigation = {};

    for (let i = 0; i < inititalData.length; i++) {
      let page = inititalData[i];
      let navItem = {
        path: page.path,
        header: page.header,
        icon: page.sectionIcon
      };

      if (navigation[page.section]) {
        navigation[page.section].push(navItem);
      } else {
        navigation[page.section] = [navItem];
      }
    }

    return navigation;
  }

  setTitle() {
    fin.desktop.System.getVersion(version => {
	     const ofVersion = document.querySelector('title');
	     ofVersion.innerText = `OpenFin Explorer | Version: ${version}`;
    });
  }

  render() {
    this.setTitle();

    return (
        <HashRouter>
          <div id='main' className='container-fluid'>
            <div className='row no-gutters'>
              <div className='col-4'>
                 <SideNav data={this.makeSideNavData()} />
              </div>
              <div className='col-8'>
                 <PageContainer data={inititalData} />
              </div>
            </div>
          </div>
        </HashRouter>
    );
  }
}
