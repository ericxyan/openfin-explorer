import * as React from 'react';

export default class PageHeader extends React.Component<PageHeaderProps> {
    constructor(props: PageHeaderProps) {
        super(props);
        this.closeApp = this.closeApp.bind(this);
    }

    private closeApp() {
        fin.desktop.Application.getCurrent().close();
    }

    public render() {
        return (
            <div className='page-header'>
                <h2>
                    <i className='material-icons'>{this.props.sectionIcon} </i>
                    {this.props.header}
                    <span className='closebutton' onClick={this.closeApp}>X</span>
                </h2>
                <h5>{this.props.subHeader}</h5>
                <p>{this.props.description}</p>
            </div>);
    }
}
