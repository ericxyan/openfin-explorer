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
        <h1>OpenFin</h1>
      </div>
    );
  }

  listSection(label, sectionItems, key) {
    return (
      <div className='of-list-section' key={key}>
        <div className='of-list-section-label' key={key}>
          <i className="material-icons">{sectionItems[0].icon}</i>
          {label}
        </div>
        {sectionItems.map((item, i) => {
          return (
            this.listItem(item.header, item.path, i)
          );
        })}
      </div>
    )
  }

  listItem(label, linkTo, key) {
    return (
      <Link key={key} to={linkTo} className='of-list-item'>
        <span>{label}</span>
      </Link>
    )
  }

  render() {
    const sections = Object.keys(this.props.data);

    return (
      <div className='side-nav'>
        {this.navHeader()}
        {sections.map((section, i) => {
          let sectionArray = this.props.data[section];
          return (
            this.listSection(section, sectionArray, i)
          )
        })}
      </div>
    );
  }
}
