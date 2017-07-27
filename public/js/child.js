import React from 'react';
import ReactDOM from 'react-dom';

import Child from '../react/Child.jsx';
require('../sass/index.scss');

//event listeners.
document.addEventListener('DOMContentLoaded', () => {
    if (typeof fin != 'undefined') {
    } else {
        ofVersion.innerText = 'OpenFin is not available - you are probably running in a browser.';
    }
});

ReactDOM.render((
  <Child />
), document.getElementById('child'));
