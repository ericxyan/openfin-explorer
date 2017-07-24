import React from 'react';

import PageHeader from '../components/Page-Header.jsx';
import PageContent from '../components/Page-Content.jsx';

export default class ChildWindowPage extends React.Component {
  render() {
    return (
      <div className='page'>
        <PageHeader />
        <PageContent />
      </div>);
  }
}
