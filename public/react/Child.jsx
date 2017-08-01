import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

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
      const current = fin.desktop.Window.getCurrent();
      current.getOptions((opt) => {
        const funcName = opt.customData;
        childDemoModule[funcName]();
      });
    }

    return (
      <button onClick={func.bind(this)}  className='btn btn-outline-primary'>Click</button>
    )
  }

  getChildFunction() {
    const current = fin.desktop.Window.getCurrent();
    const childWindowFunction = function() {
      current.getOptions((opt) => {
        const funcName = opt.customData;
        return childDemoModule[funcName];
      });
    }

    return (
      <SyntaxHighlighter language='javascript' style={docco}>{childWindowFunction.toString()}</SyntaxHighlighter>
    )
  }

  render() {
    this.setTitle();

    return (
      <div id='' className='container-fluid'>
        <div className='row no-gutters'>
          <div className='col-12'>
            <h1>Child window created!</h1>
            {this.childExecutable()}
            {this.getChildFunction()}
          </div>
        </div>
      </div>
    );
  }
}
