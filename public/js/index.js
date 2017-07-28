import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from '../react/App.jsx';
require('../sass/index.scss');

//event listeners.
document.addEventListener('DOMContentLoaded', () => {
    if (typeof fin != 'undefined') {
	     fin.desktop.main(onMain);
    } else {
        console.log('OpenFin is not available - you are probably running in a browser.');
    }
});

//Once the DOM has loaded and the OpenFin API is ready
function onMain() {
    const app = fin.desktop.Application.getCurrent();
    fin.desktop.System.showDeveloperTools(app.uuid, app.uuid);
    renderReact();
}

function renderReact() {
  ReactDOM.render((
    <HashRouter>
      <App />
    </HashRouter>
  ), document.getElementById('root'));
}
