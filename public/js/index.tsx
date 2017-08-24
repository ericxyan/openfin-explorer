import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from '../react/App';
require('../sass/index.scss');

//event listeners.
document.addEventListener('DOMContentLoaded', () => {
    if (typeof fin !== 'undefined') {
        fin.desktop.main(onMain);
    } else {
        // tslint:disable-next-line
        console.log('OpenFin is not available - you are probably running in a browser.');
    }
});

//Once the DOM has loaded and the OpenFin API is ready
function onMain() {
    // const app = fin.desktop.Application.getCurrent();
    // fin.desktop.System.showDeveloperTools(app.uuid, app.uuid);
    renderReact();
}

function renderReact() {
    if (document.getElementById('root')) {
        ReactDOM.render((
            <App />
        ), document.getElementById('root'));
    }
}
