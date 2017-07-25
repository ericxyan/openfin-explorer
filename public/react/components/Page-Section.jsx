import React from 'react';

export default class PageSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showConent: false
    };
  }

  sectionContent() {
    if (this.state.showConent) {
      return (
        <div className='of-section-content'>
        {this.props.data.content}
        </div>
      );
    }
  }

  toggleContent() {
    this.setState({showConent: !this.state.showConent});
  }

  render() {
    return (
      <div className='of-section'>
        <div onClick={this.toggleContent.bind(this)} className='of-section-title'>
          <div className='of-section-header'>
            {this.props.data.header}
          </div>
          <div className='of-section-sub-header'>
            {this.props.data.subHeader}
          </div>
        </div>
        {this.sectionContent()}
      </div>
    );
  }
}
