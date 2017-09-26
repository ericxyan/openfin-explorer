const systemSections = [
    {
        path: '/system/about',
        section: 'system',
        sectionIcon: 'desktop_windows',
        header: 'System Info',
        subHeader: 'An object representing the core of the OpenFin Runtime',
        description: 'Retrieve system info, access logs, and interact with the Runtime on a system wide level',
        sections: [
            {
                header: 'System Features',
                subHeader: 'Use innocuous desktop info to customize apps for every desktop. Debug with app level logging. Clear the cache.'
            },
            {
                header: 'Monitor Info',
                subHeader: 'Retrieve info about the user\'s monitor(s)',
                subSections: [
                    {
                        type: 'text',
                        content: [
                            'To truly break out of the browers, you\'ll need to be able to account for',
                            'all types of monitor configurations. The getMonitorInfo call returns info for',
                            'all of the monitors your user has up and running. In this demo we\'ll read the',
                            'dimensions of your primary screen.'
                        ].join(' ')
                    },
                    {
                        type: 'docsLink',
                        content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.System.html#.getMonitorInfo'
                    },
                    {
                        type: 'codeWithDomUpdate',
                        content: 'getMonitorInfo'
                    }
                ]
            },
            {
                header: 'Mouse Position',
                subHeader: 'Get the user\'s current mouse position for desktop-wide events',
                subSections: [
                    {
                        type: 'text',
                        content: [
                            'Now that we\'re dealing with the whole monitor, it stands to reason we\'ll',
                            'need to know the user\'s mouse position relative to that monitor. Click the demo',
                            'below to return your cursor position.'
                        ].join(' ')

                    },
                    {
                        type: 'docsLink',
                        content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.System.html#.getMousePosition'
                    },
                    {
                        type: 'codeWithDomUpdate',
                        content: 'getMousePosition'
                    }
                ]
            },
            {
                header: 'Developer Tools',
                subHeader: 'OpenFin gives developers access to the Chrome DevTools',
                subSections: [
                    {
                        type: 'text',
                        content: [
                            'If you have right-clicked at all you\'ll notice the context menu is still enabled in',
                            'this application. You can turn this off if you\'d like and access the developer tools with',
                            'an API call.'
                        ].join(' ')
                    },
                    {
                        type: 'docsLink',
                        content: 'http://cdn.openfin.co/jsdocs/stable/tutorial-system.showDeveloperTools.html'
                    },
                    {
                        type: 'code',
                        content: 'showDeveloperTools'
                    }
                ]
            },
            {
                header: 'Back to the Browser',
                subHeader: 'Open a link in your default browser',
                subSections: [
                    {
                        type: 'text',
                        content: [
                            'If you\'ve clicked on any of the JS Docs links to this point you\'ll notice',
                            'we are able to open links in the browser. Click the demo below to check out this',
                            'app\'s code on Github.'
                        ].join(' ')
                    },
                    {
                        type: 'docsLink',
                        content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.System.html#.openUrlWithBrowser'
                    },
                    {
                        type: 'code',
                        content: 'openThisCode'
                    }
                ]
            }
        ]
    }
];

export default systemSections;
