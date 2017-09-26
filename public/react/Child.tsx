import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

import { childDemoModule } from '../js/demo';
import childWindowContent from '../content/children';

export default class Child extends React.Component<any, ChildState> {
    constructor(props: any) {
        super(props);
        this.state = { 
            code: '',
            headline: '',
            description: ''
        };
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
            <button onClick={this.state.code} className='btn btn-primary'>Run Code</button>
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
                this.setState({ 
                    code: childDemoModule[funcName],
                    headline: childWindowContent[funcName].headline,
                    description: childWindowContent[funcName].description 
                });
            } else {
                this.setState({ 
                    code: childDemoModule.closeCurrent,
                    headline: 'Child Window',
                    description: 'Click the button below to call close.'
                });
            }
        });
    }

    public render() {
        return (
            <div className='container-fluid'>
                <div className='row no-gutters'>
                    <div className='col-12'>
                        <h1>{this.state.headline}</h1>
                        <p>{this.state.description}</p>
                        {this.displayChildFunction()}
                        {this.runChildFunction()}                        
                    </div>
                </div>
            </div>
        );
    }
}
