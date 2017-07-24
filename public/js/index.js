import React from 'react';
import ReactDOM from 'react-dom';
import App from '../react/App.jsx';

//event listeners.
document.addEventListener('DOMContentLoaded', () => {
    if (typeof fin != 'undefined') {
	     fin.desktop.main(onMain);
    } else {
        ofVersion.innerText = 'OpenFin is not available - you are probably running in a browser.';
    }
});

//Once the DOM has loaded and the OpenFin API is ready
function onMain() {
    const app = fin.desktop.Application.getCurrent();
    fin.desktop.System.showDeveloperTools(app.uuid, app.uuid);
}

ReactDOM.render(<App />, document.getElementById('root'));
