import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PageComponent from './components/Page.jsx';

export default class PageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        {this.props.data.map((pageData, i) => {
          const extraProps = this.props.data[i];
          return <Route key={i} exact path={pageData.path} render={(pageData) => {
            return <PageComponent {...pageData} data={extraProps}/>
          }} />
        })}
      </Switch>
    );
  }
}
