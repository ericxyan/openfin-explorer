import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

import { parentDemoModule  } from '../../../js/demo';

export default class CodeWithInputUpdateDom extends React.Component <CodeWithInputUpdateDomProps, CodeWithInputUpdateDomState> {
    private executable: any;
    private updateDivId: string;
    constructor(props: CodeWithInputUpdateDomProps) {
        super(props);
        this.state = {
            inputValue:  props.defaultValue
        };
        this.updateDivId = Math.random().toString();
        this.executable = parentDemoModule[this.props.content];
        this.handleChange = this.handleChange.bind(this);
        this.onClickFunction = this.onClickFunction.bind(this);
    }

    private handleChange(event: any) {
        this.setState({ inputValue: event.target.value });
    }

    private onClickFunction() {
        const divToUpdate = document.getElementById(this.updateDivId);
        this.executable(this.state.inputValue, this.updateDivId);
    }

    public render() {
        return (
            <div className='sub-section codeWithInputUpdateDomCustom codeBlock' key={this.props.myKey}>
                <div id={this.updateDivId}></div>
                <SyntaxHighlighter language='javascript' style={docco}>{this.executable.toString()}</SyntaxHighlighter>
                <label className='section-input'>
                    {this.props.inputLabel}
                    <input type='text' value={this.state.inputValue} onChange={this.handleChange} className='codeInput'/>
                </label>
                <button onClick={this.onClickFunction} className='btn btn-outline-primary'>Click to Demo</button>
            </div>
        );
    }
}
