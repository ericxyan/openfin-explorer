import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

export default class Shortcuts extends React.Component<ShortcutsSectionProps, ShortcutsSectionState> {
    constructor(props: ShortcutsSectionProps) {
        super(props);
        this.instantiateBoxes();
        this.state = {
            desktop: false,
            startMenu: false,
            systemStartup: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    private instantiateBoxes() {
        const thisApp = fin.desktop.Application.getCurrent();
        thisApp.getShortcuts(shortcuts => {
            this.setState({
                desktop: shortcuts.desktop,
                startMenu: shortcuts.startMenu,
                systemStartup: shortcuts.systemStartup
            });
        });
    }

    private setAppShortcuts() {
        const thisApp = fin.desktop.Application.getCurrent();
        thisApp.setShortcuts(this.state);
    }

    private handleChange(event: any) {
        const target = event.target;
        const value = target.checked;
        const id = target.id;
        this.setState({
            [id]: value
        });
    }

    private handleClick() {
        this.setAppShortcuts();
    }

    public render() {
        return (
            <div className='sub-section'>
                <label htmlFor='desktop' className='set-shortcut-label'>
                    <input id='desktop' type='checkbox' checked={this.state.desktop} onChange={this.handleChange} className='shortcut-check'/>
                    Desktop
                </label>
                <label htmlFor='startMenu' className='set-shortcut-label'>
                    <input id='startMenu' type='checkbox' checked={this.state.startMenu} onChange={this.handleChange} className='shortcut-check'/>                
                    Start Menu
                </label>
                <label htmlFor='systemStartup' className='set-shortcut-label'>
                    <input id='systemStartup' type='checkbox' checked={this.state.systemStartup} onChange={this.handleChange} className='shortcut-check'/>                
                    System Startup
                </label>
                <input type='submit' value='Submit' onClick={this.handleClick} className='btn btn-outline-primary'/>
            </div>
        );
    }
}
