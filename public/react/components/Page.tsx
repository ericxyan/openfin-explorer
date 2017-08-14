import * as React from 'react';

import PageHeader from './Page-Header';
import PageSection from './Page-Section';

export interface PageComponentData {
  header: string,
  sectionIcon: string,
  subHeader: string,
  description: string,
  sections: Array<any>
}
export interface PageComponentProps {data: PageComponentData}

export default class PageComponent extends React.Component<PageComponentProps> {
  constructor(props) {
    super(props);
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
