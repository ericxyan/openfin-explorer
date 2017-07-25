import React from 'react';

import PageHeader from './Page-Header.jsx';
import PageSection from './Page-Section.jsx';

export default class PageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('page props', this.props)
    console.log('page data', this.props.data)

    return (
      <div className='page'>
        <PageHeader
          header={this.props.data.header}
          subHeader={this.props.data.subHeader}
          description={this.props.data.description}/>
        <PageSection />
      </div>);
  }
}
