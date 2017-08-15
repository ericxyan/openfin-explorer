import * as React from 'react';

import PageHeader from './Page-Header';
import PageSection from './Page-Section';

export default class PageComponent extends React.Component<PageComponentProps> {
  constructor(props: PageComponentProps) {
    super(props);
  }

  private pageSections() {
    if (this.props.data.hasOwnProperty('sections')) {
      return (
        this.props.data.sections.map((section, i) => {
          return (
            <PageSection key={i} data={section} />
          );
        })
      );
    }
  }

  public render() {
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
