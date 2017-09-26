const { JSDOM } = require('jsdom');

let jsdom = new JSDOM('<!doctype html><html><body></body></html>');
let { window } = jsdom;

function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === 'undefined')
        .map(prop => Object.getOwnPropertyDescriptor(src, prop));
    Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js'
};

//mocked app
const mockedApp = {
    getShortcuts: () => {}
}

// mock fin
global.fin = {
    desktop: {
        Application: {
            getCurrent: () => { return  mockedApp }
        },
        System: {
            getVersion: () => { }
        }
    }
};
