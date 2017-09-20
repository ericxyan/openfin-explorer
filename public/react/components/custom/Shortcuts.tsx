import * as React from 'React';
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
            <div>
                <input id='desktop' type='checkbox' checked={this.state.desktop} onChange={this.handleChange}/>
                <label htmlFor='desktop'>Desktop</label>
                <input id='startMenu' type='checkbox' checked={this.state.startMenu} onChange={this.handleChange}/>
                <label htmlFor='startMenu'>Start Menu</label>
                <input id='systemStartup' type='checkbox' checked={this.state.systemStartup} onChange={this.handleChange}/>
                <label htmlFor='systemStartup'>System Startup</label>
                <input type='submit' value='Submit' onClick={this.handleClick}/>
            </div>
        );
    }
}
