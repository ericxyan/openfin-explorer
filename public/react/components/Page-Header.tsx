import * as React from 'react';

export interface PageHeaderProps {header: string, sectionIcon: string, subHeader: string, description: string}

export default class PageHeader extends React.Component<PageHeaderProps> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='page-header'>
        <h2>
          <i className="material-icons">{this.props.sectionIcon} </i>
          {this.props.header}
        </h2>
        <h5>{this.props.subHeader}</h5>
        <p>{this.props.description}</p>
      </div>);
  }
}
