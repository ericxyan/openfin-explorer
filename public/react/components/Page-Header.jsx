import React from 'react';

export default class PageHeader extends React.Component {
  // Props: header, icon, subHeader, description
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='header'>
        <h2>{this.props.header}</h2>
        <h5>{this.props.subHeader}</h5>
        <p>{this.props.description}</p>
      </div>);
  }
}
