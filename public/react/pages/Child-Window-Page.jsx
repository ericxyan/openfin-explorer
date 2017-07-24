import React from 'react';

import PageHeader from '../components/Page-Header.jsx';
import PageSection from '../components/Page-Section.jsx';

export default class ChildWindowPage extends React.Component {
  render() {
    return (
      <div className='page'>
        <PageHeader
          header='Child Windows'
          subHeader='Create child windows'
          description='Child windows use the same renderer as their parent.'/>
        <PageSection />
      </div>);
  }
}
