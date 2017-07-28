import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

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

      const Current = fin.desktop.Window.getCurrent();
      Current.getOptions((opt) => {
        console.log(opt.customData)
      })
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
        <div>{this.temp()}</div>
      </div>
    );
  }
}
