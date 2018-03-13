import * as React from 'react';

const DemoResult = (props) => {
    return (
        <div className='section-demo-result'>
            <div className='section-demo-result-title'>
                DEMO RESULT
            </div>
            <div className='section-demo-result-value'>{props.result}</div>
        </div>
    );
};

const CodeBlock = (props) => {
    const lines = props.codeBlockArray.map((line, index) => {
        return <code key={index}>{line}</code>;
    });

    return (
        <pre className='demo-code'>
            {lines}
        </pre>
    );
};

export default class Section extends React.Component <{ section: any }, { demoClicked: boolean; demoValue: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            demoClicked: false,
            demoValue: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.docsLink = this.docsLink.bind(this);
    }

    private handleClick() {
        const demoResult = this.props.section.sampleCode();
        this.setState({
            demoClicked: true,
            demoValue: demoResult
        });
    }

    private docsLink() {
        fin.desktop.System.openUrlWithBrowser(this.props.section.docsLink);
    }

    public render() {
        return (
            <li className='section-title' id={this.props.section.hashLink}>{this.props.section.title}
                <div className='section-description'>{this.props.section.description}</div>
                <div className='need-to-know'>
                    <div className='need-to-know-title'>Need to Know</div>
                    <div className='section-need-to-know'>{this.props.section.needToKnow}</div>
                </div>
                <CodeBlock codeBlockArray={this.props.section.sampleCodeText} />
                {/* <pre>
                <code className='demo-code'>{this.props.section.sampleCodeText.join('\n')}</code>
                </pre> */}
                <button className='section-demo-button' onClick={this.handleClick}>
                    Click to demo<img src='icons/enter.png' className='enter-icon'/>
                </button>
                <div className='section-jsdocs' onClick={this.docsLink}>
                    View our JSDocs <img src='icons/color-right.png' className='color-right'/>
                </div>
                { this.state.demoClicked ? <DemoResult result={this.state.demoValue} /> : null }
            </li>
        );
    }
}