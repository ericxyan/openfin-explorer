import React from 'react';

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setTitle() {
    const Current = fin.desktop.Window.getCurrent();
    const currentTitle = document.querySelector('title');

    currentTitle.innerText = `${Current.name}`;
    console.log(Current);
  }

  render() {
    this.setTitle();

    return (
      <div id='' className=''>
        <h1>Child created!</h1>
      </div>
    );
  }
}
