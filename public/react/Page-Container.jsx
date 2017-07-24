import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ChildWindowPage from './pages/Child-Window-Page.jsx';
import WelcomePage from './pages/Welcome-Page.jsx';

export default class PageContainer extends React.Component {
  // TODO: direct to welcome page on start
  render() {
    return (
      <Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route path='/windows/child-window' component={ChildWindowPage} />
      </Switch>);
  }
}
