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

  temp() {
    const data = 'this is the data i am sending'
    const parentDocument = window.opener.document;
    const parentElement = parentDocument.createElement('h1');
    parentElement.innerText = data;

    let func = function() {
      const container = parentDocument.querySelector('#demo-data-container');
      container.appendChild(parentElement);
    }

    return (
      <button onClick={func.bind(this)}  className='btn btn-outline-primary'>Click</button>
    )
  }

  render() {
    this.setTitle();

    return (
      <div id='' className=''>
        <h1>Child created!</h1>
        {this.temp()}
      </div>
    );
  }
}
