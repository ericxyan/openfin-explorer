const windowsSections = [
{
    path: '/windows/child-window',
    section: 'windows',
    sectionIcon: 'open_in_browser',
    header: 'Child Windows',
    subHeader: 'Manage a collection of windows to build your interface',
    description: 'Child windows share their parent renderer.',
    sections: [
        {
            header: 'About Windows',
            subHeader: [
                'The Window namespace provides more specific controls for an application UI. When launching an application,',
                'you\'ll typically create a main window (though headless applications are possible). You can interact with',
                'that window or create and interact with child windows for you application.'
            ].join(' ')
        },
        {
            header: 'Current Window',
            subHeader: 'Retrieve the current window object',
            subSections: [
                {
                    type: 'text',
                    content: 'Make the same getCurrent call on the Window namespace to retrieve this Window.'
                },
                {
                    type: 'docsLink',
                    content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.Window.html#.getCurrent'
                },
                {
                    type: 'codeWithDomUpdate',
                    content: 'getCurrentWindow'
                }
            ]
        },
        {
            header: 'Create a Window',
            subHeader: 'Launch a new window from a parent application',
            subSections: [
                {
                    type: 'text',
                    content: [
                        'The Window constructor makes it possible to launch and control child windows from any parent object.',
                        'A window only requires a unique name and URL, which represents the page the window is targeting - which',
                        'in this case is another HTML page hosted alongside this one.',
                        'Cross origin requests should be kept in new applications.'
                    ].join(' ')
                },
                {
                    type: 'docsLink',
                    content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.Window.html#Window'
                },
                {
                    type: 'code',
                    content: 'openWindow'
                }
            ]
        },
        {
            header: 'Window Options',
            subHeader: 'A configuration object for an OpenFin window.',
            subSections: [
                {
                    type: 'text',
                    content: [
                        'When creating a window, you pass in a Window Options object. This does exactly as advertised - provides a',
                        'full suite of configurable settings that defines your window\'s appearance on launch. Check out the demo',
                        'below to modify a few configurations for another child window, or see the full list of options on our JS docs.',
                        'Note: saving window state is triggered on re-launch.'
                    ].join(' ')
                },
                {
                    type: 'docsLink',
                    content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.Window.html#~options'
                },
                {
                    type: 'custom',
                    content: 'windowOptions'
                }
            ]
        },
        {
            header: 'Window Details',
            subHeader: 'Retrieve information about the current window',
            subSections: [
                {
                    type: 'text',
                    content: [
                        'As users interact with your application, the default settings you pass in may be modified.',
                        'The API makes it easy to retrieve information about the current window state or shape.'
                    ].join(' ')
                },
                {
                    type: 'docsLink',
                    content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.Window.html#getBounds'
                },
                {
                    type: 'codeWithDomUpdate',
                    content: 'getBounds'
                },
                {
                    type: 'docsLink',
                    content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.Window.html#getState'
                },
                {
                    type: 'codeWithDomUpdate',
                    content: 'getState'
                }
            ]
        },
        {
            header: 'Close Window',
            subHeader: 'Close a window from a parent application',
            subSections: [
                {
                    type: 'text',
                    content: [
                        'Child windows can be closed from within the window itself or from the parent. You can interact',
                        'with the created object or call .wrap just like with an application. In the first demo, we\'ll call',
                        'close after a short timeout on the created window. In the second, we\'ll wrap the created window and',
                        'call close on that.'
                    ].join(' ')
                },
                {
                    type: 'docsLink',
                    content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.Window.html#close'
                },
                {
                    type: 'code',
                    content: 'closeWindow'
                },
                {
                    type: 'docsLink',
                    content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.Window.html#.wrap'
                },
                {
                    type: 'codeWithDomUpdate',
                    content: 'showWrappedWindow'
                }
            ]
        }
    ]
},
{
    path: '/windows/control-window',
    section: 'windows',
    sectionIcon: 'open_in_browser',
    header: 'Control Windows',
    subHeader: 'Interact with windows using the OpenFin API',
    description: 'move windows to a location or by a specific amount. add animations to make movements smoother.',
    sections: [
        {
            header: 'Move',
            subHeader: 'Relative or absolute movement of Windows',
            subSections: [
                {
                    type: 'text',
                    content: [
                        'Relative movement is possible by calling moveBy, or call moveTo to send the window to a',
                        'specific location on the screen.'
                    ].join(' ')
                },
                {
                    type: 'docsLink',
                    content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.Window.html#moveBy'
                },
                {
                    type: 'code',
                    content: 'moveBy'
                },
                {
                    type: 'docsLink',
                    content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.Window.html#moveTo'
                },
                {
                    type: 'code',
                    content: 'moveTo'
                }
            ]
        },
        {
            header: 'Animations',
            subHeader: 'Opacity, Position, or Size animations',
            subSections: [
                {
                    type: 'text',
                    content: 'Click through the sample transitions below to see some simple animations.'
                },
                {
                    type: 'docsLink',
                    content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.Window.html#animate'
                },
                {
                    type: 'code',
                    content: 'animatePosition'
                },
                {
                    type: 'code',
                    content: 'animateOpacity'
                },                
                {
                    type: 'externalLink',
                    content: 'http://cdn.openfin.co/jsdocs/stable/tutorial-window.animate.html',
                    linkText: 'Check out the full animation spec here'
                }
            ]
        },
        {
            header: 'Create A Group',
            subHeader: 'Group a child with its parent.',
            subSections: [
                {
                    type: 'text',
                    content: [
                        'We\'ll create a new window and launch it directly to the right, then group it with',
                        'this one. The customData we\'re passing is a reference to the leaveGroup function, which',
                        'you can call in the child to separate the window. Grouping the windows means any time we move one,',
                        'the other will move as well.'
                    ].join(' ')
                },
                {
                    type: 'docsLink',
                    content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.Window.html#joinGroup'
                },
                {
                    type: 'code',
                    content: 'groupWindows'
                }
            ]
        }
    ]
}];

export default windowsSections;
