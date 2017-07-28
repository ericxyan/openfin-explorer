import React from 'react';
import ReactDOM from 'react-dom';

import Child from '../react/Child.jsx';
require('../sass/index.scss');

//event listeners.
document.addEventListener('DOMContentLoaded', () => {
    if (typeof fin != 'undefined') {
      renderReact();
    } else {
      console.log('OpenFin is not available - you are probably running in a browser.');
    }
});

function renderReact() {
  if (document.getElementById('child')) {
    ReactDOM.render((
      <Child />
    ), document.getElementById('child'));
  }
}
