const content = [
    {
        path: '/applications',
        content: {
            header: 'APPLICATIONS',
            headline: 'OpenFin Applications',
            headlineCaption: 'Control your application and add OS level features on the OpenFin Runtime',
            sections: [
                {
                    title: 'The Application Class',
                    hashLink: 'the-application-class',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   const demoDiv = document.getElementById("demo-div")',
                        '   const thisApplication = fin.desktop.Application.getCurrent();',
                        '   demoDiv.innerText = `This application\'s UUID is \${thisApplication.uuid}`',
                        '}'
                    ],
                    sampleCode: () => {
                        const thisApp = fin.desktop.Application.getCurrent();
                        return `This application's UUID is ${thisApp.uuid}`;
                    },
                    docsLink: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.Application.html#.getCurrent'
                },
                {
                    title: 'Creating An Application',
                    hashLink: 'creating-an-application',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                },
                {
                    title: 'Application Manifest',
                    hashLink: 'application-manifest',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                },
                {
                    title: 'Lifecycle Controls',
                    hashLink: 'lifecycle-controls',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                },
                {
                    title: 'Custom Event Listeners',
                    hashLink: 'custom-event-listeners',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                }
            ]
        }
    },
    {
        path: '/applications-shortcuts',
        content: {
            header: 'APPLICATIONS',
            headline: 'Shortcuts',
            headlineCaption: 'Desktop, Start Menu, and System Startup shortcut configuration for your application.',
            sections: [
                {
                    title: 'Shortcut Information',
                    hashLink: 'shortcut-information',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        window.alert('hello');
                    }
                },
                {
                    title: 'Set Shortcuts',
                    hashLink: 'set-shortcuts',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                }
            ]
        }
    },
    {
        path: '/windows',
        content: {
            header: 'WINDOWS',
            headline: 'Child Windows',
            headlineCaption: 'Desktop, Start Menu, and System Startup shortcut configuration for your application.',
            sections: [
                {
                    title: 'Current Window',
                    hashLink: 'current-window',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                },
                {
                    title: 'Create A Window',
                    hashLink: 'create-a-window',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                },
                {
                    title: 'Window Options',
                    hashLink: 'window-options',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                },
                {
                    title: 'Window Details',
                    hashLink: 'window-details',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                },
                {
                    title: 'Close Window',
                    hashLink: 'close-window',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                }
            ]
        }
    },
    {
        path: '/control-windows',
        content: {
            header: 'WINDOWS',
            headline: 'Control Windows',
            headlineCaption: 'Desktop, Start Menu, and System Startup shortcut configuration for your application.',
            sections: [
                {
                    title: 'Move',
                    hashLink: 'move',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                },
                {
                    title: 'Animations',
                    hashLink: 'animations',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                },
                {
                    title: 'Create A Group',
                    hashLink: 'create-a-group',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                }
            ]
        }
    },
    {
        path: '/communication',
        content: {
            header: 'COMMUNICATION',
            headline: 'Communication',
            headlineCaption: 'Desktop, Start Menu, and System Startup shortcut configuration for your application.',
            sections: [
                {
                    title: 'Directly Interact',
                    hashLink: 'directly-interact',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                }
            ]
        }
    },
    {
        path: '/interapplicationbus',
        content: {
            header: 'COMMUNICATION',
            headline: 'InterApplicationBus',
            headlineCaption: 'Desktop, Start Menu, and System Startup shortcut configuration for your application.',
            sections: [
                {
                    title: 'Subscribe',
                    hashLink: 'subscribe',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                },
                {
                    title: 'Publish',
                    hashLink: 'publish',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                }
            ]
        }
    },
    {
        path: '/notifications',
        content: {
            header: 'NOTIFICATIONS',
            headline: 'Notifications',
            headlineCaption: 'Desktop, Start Menu, and System Startup shortcut configuration for your application.',
            sections: [
                {
                    title: 'Create Notifications',
                    hashLink: 'create-notifications',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                },
                {
                    title: 'Message Passing',
                    hashLink: 'message-passing',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                },
                {
                    title: 'Interactive Notifications',
                    hashLink: 'interactive-notifications',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                }
            ]
        }
    },
    {
        path: '/system',
        content: {
            header: 'SYSTEM',
            headline: 'System',
            headlineCaption: 'Desktop, Start Menu, and System Startup shortcut configuration for your application.',
            sections: [
                {
                    title: 'Monitor Info',
                    hashLink: 'monitor-info',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                },
                {
                    title: 'Mouse Position',
                    hashLink: 'mouse-position',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                },
                {
                    title: 'Developer Tools',
                    hashLink: 'developer-tools',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                },
                {
                    title: 'Back To The Browser',
                    hashLink: 'back-to-the-browser',
                    description: [
                        'An object that represents an Application. ',
                        'You can interact with your application by creating an object that represents it, ',
                        'or wrap an application if you know its unqiue identifer, or UUID.'
                    ].join(''),
                    needToKnow: 'The Application namespace is responsible for all of the features you expect from a desktop application.',
                    sampleCodeText: [
                        'function () {',
                        '   console.log("hello");',
                        '}'
                    ],
                    sampleCode: () => {
                        return true;
                    }
                }
            ]
        }
    }
];

export default content;