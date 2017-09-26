import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Child from '../react/Child';
require('../sass/index.scss');

//event listeners.
document.addEventListener('DOMContentLoaded', () => {
    if (typeof fin !== 'undefined') {
        renderReact();
    } else {
        // tslint:disable-next-line
        console.log('OpenFin is not available - you are probably running in a browser.');
    }
});

function renderReact() {
    if (document.getElementById('child')) {
        ReactDOM.render(<Child />, document.getElementById('child'));
    }
}
