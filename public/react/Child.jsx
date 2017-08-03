import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

import { childDemoModule } from '../js/demo.js';

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {code: ''};
  }

  setTitle() {
    const Current = fin.desktop.Window.getCurrent();
    const currentTitle = document.querySelector('title');
    currentTitle.innerText = `${Current.name}`;
  }

  childExecutable() {
    // TODO: if no function from parent button should close the window.
    return (
      <button onClick={this.state.code} className='btn btn-outline-primary'>Click</button>
    )
  }

  getChildFunction() {
    return (
      <SyntaxHighlighter language='javascript' style={docco}>{this.state.code.toString()}</SyntaxHighlighter>
    )
  }

  getInitialData() {
    const current = fin.desktop.Window.getCurrent();
    current.getOptions((opt) => {
      const funcName = opt.customData;
      this.setState({code: childDemoModule[funcName]})
    });
  }

  render() {
    this.setTitle();
    this.getInitialData();

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
