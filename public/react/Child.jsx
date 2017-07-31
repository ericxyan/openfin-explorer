import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { childDemoModule } from '../js/demo.js';

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setTitle() {
    const Current = fin.desktop.Window.getCurrent();
    const currentTitle = document.querySelector('title');
    currentTitle.innerText = `${Current.name}`;
  }

  childExecutable() {
    const func = function() {
      const Current = fin.desktop.Window.getCurrent();
      Current.getOptions((opt) => {
        const funcName = opt.customData;
        childDemoModule[funcName]();
      });
    }

    return (
      <button onClick={func.bind(this)}  className='btn btn-outline-primary'>Click</button>
    )
  }

  render() {
    this.setTitle();

    return (
      <div id='' className='container-fluid'>
        <div className='row no-gutters'>
          <div className='col-12'>
            <h1>Child created!</h1>
            <div>{this.childExecutable()}</div>
          </div>
        </div>
      </div>
    );
  }
}
