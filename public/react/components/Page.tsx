import * as React from 'react';

import PageHeader from './Page-Header';
import PageSection from './Page-Section';

export default class PageComponent extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  pageSections() {
    if (this.props.data.hasOwnProperty('sections')) {
      let sections = this.props.data.sections;
      return (
        sections.map((section, i) => {
          return <PageSection key={i} data={section} />
        })
      );
    }
  }

  render() {
    return (
      <div className='page'>
        <PageHeader
          header={this.props.data.header}
          subHeader={this.props.data.subHeader}
          description={this.props.data.description}
          sectionIcon={this.props.data.sectionIcon} />
        {this.pageSections()}
      </div>);
  }
}
