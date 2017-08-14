import * as React from 'react';

export default class PageHeader extends React.Component<any, any> {
  // Props: header, icon, subHeader, description
  constructor(props) {
    super(props);
    this.state = {};
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
