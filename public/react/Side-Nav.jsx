import React from 'react';
import { Link } from 'react-router-dom';

export default class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navHeader() {
    return (
      <div className='header'>
        <Link to='/'><h1>OpenFin</h1></Link>
      </div>
    );
  }

  listSection(label, icon) {
    return (
      <div className='of-list-section'>{label}</div>
    )
  }

  listItem(label, linkTo) {
    return (
      <Link to={linkTo} className='of-list-item'>
        <span>{label}</span>
      </Link>
    )
  }

  render() {
    return (
      <div className='side-nav'>
        {this.navHeader()}
        {this.listSection('Windows')}
        {this.listItem('Child Windows', '/windows/child-window')}
      </div>
    );
  }
}
