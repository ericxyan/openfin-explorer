const sections = [
    {
        name: 'Home',
        iconName: 'home',
        rootPath: '/',
        pages: [
            {
                name: 'index'
            }
        ]
    },
    {
        name: 'Getting Started',
        iconName: 'gettingStarted',
        rootPath: '/getting-started',
        pages: [
            {

                name: 'Intro to OpenFin',
                contentBlocks: [
                    {
                        name: 'Basics'
                    }
                ]
            },
            {
                name: 'Core Concepts',
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
                contentBlocks: [
                    {
                        name: 'The Application Class'
                    },
                    {
                        name: 'Creating An Application'
                    },
                    {
                        name: 'Application Manifest'
                    },
                    {
                        name: 'Lifecycle Controls'
                    },
                    {
                        name: 'Custome Event Listeners'
                    }
                ]
            },
            {
                name: 'Shortcus',
                contentBlocks: [
                    {
                        name: 'Shortcut Information'
                    },
                    {
                        name: 'Set Shortcuts'
                    }
                ]
            }
        ]
    },
    {
        name: 'Windows',
        iconName: 'windows',
        rootPath: '/applications/about',
        pages: [
            {
                name: 'Child Windows',
                contentBlocks: [
                    {
                        name: 'Current Window'
                    },
                    {
                        name: 'Create A Window'
                    },
                    {
                        name: 'Window Options'
                    },
                    {
                        name: 'Window Details'
                    },
                    {
                        name: 'Close Window'
                    }
                ]
            },
            {
                name: 'Control Windows',
                contentBlocks: [
                    {
                        name: 'Move'
                    },
                    {
                        name: 'Animations'
                    },
                    {
                        name: 'Create A Group'
                    }
                ]
            }
        ]
    },
    {
        name: 'Communication',
        iconName: 'communication',
        rootPath: '/applications/about',
        pages: [
            {
                name: 'Child <-> Parent',
                contentBlocks: [
                    {
                        name: 'Directly Interact Via Memory'
                    }
                ]
            },
            {
                name: 'InterApplicationBus',
                contentBlocks: [
                    {
                        name: 'Subscribe'
                    },
                    {
                        name: 'Publish'
                    }
                ]
            }
        ]
    },
    {
        name: 'Notifications',
        iconName: 'notifications',
        rootPath: '/applications/about',
        pages: [
            {
                name: 'Desktop Alerts',
                contentBlocks: [
                    {
                        name: 'Create Notification'
                    },
                    {
                        name: 'Message Passing'
                    },
                    {
                        name: 'Interactive Notifications'
                    }
                ]
            }
        ]
    },
    {
        name: 'System',
        iconName: 'system',
        rootPath: '/applications/about',
        pages: [
            {
                name: 'System Info',
                contentBlocks: [
                    {
                        name: 'Monitor Info'
                    },
                    {
                        name: 'Mouse Position'
                    },
                    {
                        name: 'Developer Tools'
                    },
                    {
                        name: 'Back To The Browser'
                    }
                ]
            }
        ]
    }
];

export default sections;
