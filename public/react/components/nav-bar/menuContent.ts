const items = [
    {
        name: 'Home',
        iconName: 'home',
        rootPath: '/'
    },
    {
        name: 'Getting Started',
        iconName: 'gettingStarted',
        rootPath: '/getting-started',
        pages: [
            {

                name: 'Intro to OpenFin',
                path: '/getting-started',
                contentBlocks: [
                    {
                        name: 'Basics'
                    }
                ]
            },
            {
                name: 'Core Concepts',
                path: '/core-concepts',
                contentBlocks: [
                    {
                        name: 'HTML5'
                    },
                    {
                        name: 'Security'
                    }
                ]
            }
        ]
    },
    {
        name: 'Applications',
        iconName: 'applications',
        rootPath: '/applications',
        pages: [
            {
                name: 'OpenFin Applications',
                path: '/applications',
                contentBlocks: [
                    {
                        name: 'The Application Class',
                        hashLink: 'the-application-class'
                    },
                    {
                        name: 'Creating An Application',
                        hashLink: 'creating-an-application'
                    },
                    {
                        name: 'Application Manifest',
                        hashLink: 'application-manifest'
                    },
                    {
                        name: 'Lifecycle Controls',
                        hashLink: 'lifecycle-controls'
                    },
                    {
                        name: 'Custome Event Listeners',
                        hashLink: 'custom-event-listeners'
                    }
                ]
            },
            {
                name: 'Shortcus',
                path: '/applications-shortcuts',
                contentBlocks: [
                    {
                        name: 'Shortcut Information',
                        hashLink: 'shortcut-information'
                    },
                    {
                        name: 'Set Shortcuts',
                        hashLink: 'set-shortcuts'
                    }
                ]
            }
        ]
    },
    {
        name: 'Windows',
        iconName: 'windows',
        rootPath: '/windows',
        pages: [
            {
                name: 'Child Windows',
                path: '/windows',
                contentBlocks: [
                    {
                        name: 'Current Window',
                        hashLink: 'current-window'
                    },
                    {
                        name: 'Create A Window',
                        hashLink: 'create-a-window'
                    },
                    {
                        name: 'Window Options',
                        hashLink: 'window-options'
                    },
                    {
                        name: 'Window Details',
                        hashLink: 'window-details'
                    },
                    {
                        name: 'Close Window',
                        hashLink: 'close-window'
                    }
                ]
            },
            {
                name: 'Control Windows',
                path: '/control-windows',
                contentBlocks: [
                    {
                        name: 'Move',
                        hashLink: 'move'
                    },
                    {
                        name: 'Animations',
                        hashLink: 'animations'
                    },
                    {
                        name: 'Create A Group',
                        hashLink: 'create-a-group'
                    }
                ]
            }
        ]
    },
    {
        name: 'Communication',
        iconName: 'communication',
        rootPath: '/communication',
        pages: [
            {
                name: 'Child <-> Parent',
                path: '/communication',
                contentBlocks: [
                    {
                        name: 'Directly Interact',
                        hashLink: 'directly-interact'
                    }
                ]
            },
            {
                name: 'InterApplicationBus',
                path: '/interapplicationbus',
                contentBlocks: [
                    {
                        name: 'Subscribe',
                        hashLink: 'subscribe'
                    },
                    {
                        name: 'Publish',
                        hashLink: 'publish'
                    }
                ]
            }
        ]
    },
    {
        name: 'Notifications',
        iconName: 'notifications',
        rootPath: '/notifications',
        pages: [
            {
                name: 'Desktop Alerts',
                path: '/notifications',
                contentBlocks: [
                    {
                        name: 'Create Notifications',
                        hashLink: 'create-notifications'
                    },
                    {
                        name: 'Message Passing',
                        hashLink: 'message-passing'
                    },
                    {
                        name: 'Interactive Notifications',
                        hashLink: 'interactive-notifications'
                    }
                ]
            }
        ]
    },
    {
        name: 'System',
        iconName: 'system',
        rootPath: '/system',
        pages: [
            {
                name: 'System Info',
                path: '/system',
                contentBlocks: [
                    {
                        name: 'Monitor Info',
                        hashLink: 'monitor-info'
                    },
                    {
                        name: 'Mouse Position',
                        hashLink: 'mouse-position'
                    },
                    {
                        name: 'Developer Tools',
                        hashLink: 'developer-tools'
                    },
                    {
                        name: 'Back To The Browser',
                        hashLink: 'back-to-the-browser'
                    }
                ]
            }
        ]
    }
];

export default items;
