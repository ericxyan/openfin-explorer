import * as React from 'react';

export default class WindowOptions extends React.Component<WindowOptionsProps, WindowOptionsState> {
    constructor(props: WindowOptionsProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.launchWindowWithPreferences = this.launchWindowWithPreferences.bind(this);
        this.state = {
            childFrame: true,
            childDefaultWidth: 800,
            childDefaultHeight: 600,
            childSaveState: false
        };
    }

    private launchWindowWithPreferences() {
        const windowName = 'windowOptionsChild';
        const windowConfig = {
            url: 'child.html',
            name: windowName,
            frame: this.state.childFrame,
            defaultWidth: this.state.childDefaultWidth,
            defaultHeight: this.state.childDefaultHeight,
            autoShow: true,
            saveWindowState: this.state.childSaveState
        };

        const thisApp = fin.desktop.Application.getCurrent();
        thisApp.getChildWindows(childWindows => {
            const appNames = childWindows.map(win => win.name);
            if (appNames.includes(windowName)) {
                const childWindow = fin.desktop.Window.wrap(thisApp.uuid, windowName);
                childWindow.close(null, () => { return new fin.desktop.Window(windowConfig); });
            } else {
                return new fin.desktop.Window(windowConfig);
            }
        });
    }

    private handleChange(event: any) {
        const target = event.target;
        const value = target.type === 'number' ? parseInt(target.value) : target.checked;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    public render() {
        return (
            <div className='sub-section'>
                <label>
                    Default Width:
                    <input name='childDefaultWidth' type='number' value={this.state.childDefaultWidth} onChange={this.handleChange}/>
                </label>
                <label>
                    Default Height:
                    <input name='childDefaultHeight' type='number' value={this.state.childDefaultHeight} onChange={this.handleChange}/>
                </label>
                <label>
                    Frame?
                    <input name='childFrame' type='checkbox' checked={this.state.childFrame} onChange={this.handleChange} />
                </label>
                <label>
                    Remember Window Position?
                    <input name='childSaveState' type='checkbox' checked={this.state.childSaveState} onChange={this.handleChange} />
                </label>
                <input type='submit' value='Launch' onClick={this.launchWindowWithPreferences} />
            </div>
        );
    }
}
