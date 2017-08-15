import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

import { childDemoModule } from '../js/demo';

export default class Child extends React.Component<any, ChildState> {
  constructor(props: any) {
    super(props);
    this.state = {code: ''};
    this.setTitle();
    this.getInitialData();
  }

  private setTitle() {
    const current = fin.desktop.Window.getCurrent();
    const windowTitle = document.querySelector('title');
    windowTitle.innerText = `${current.name}`;
  }

  private runChildFunction() {
    return (
      <button onClick={this.state.code} className='btn btn-outline-primary'>Click</button>
    );
  }

  private displayChildFunction() {
    return (
      <SyntaxHighlighter language='javascript' style={docco}>{this.state.code.toString()}</SyntaxHighlighter>
    );
  }

  private getInitialData(): void {
    const current = fin.desktop.Window.getCurrent();
    current.getOptions((opt) => {
      const funcName = opt.customData;
      if (funcName) {
        this.setState({code: childDemoModule[funcName]});
      } else {
        this.setState({code: childDemoModule.closeCurrent});
      }
    });
  }

  public render() {
    return (
      <div className='container-fluid'>
        <div className='row no-gutters'>
          <div className='col-12'>
            <h1>Child window created!</h1>
            {this.runChildFunction()}
            {this.displayChildFunction()}
          </div>
        </div>
      </div>
    );
  }
}
