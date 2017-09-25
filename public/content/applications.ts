const applicationSections = [
    {
        pageName: 'about',
        header: 'OpenFin Applications',
        subHeader: 'An application operating on the OpenFin Runtime',
        description: 'Control your application and add OS level features',
        sections: [
            {
                header: 'Applications',
                subHeader: [
                    'The Application namespace is responsible for all of the features one would expect',
                    'from a desktop application.'
                ]
            },
            {
                header: 'The Application Class',
                subHeader: 'An object that represents an Application.',
                subSections: [
                    {
                        type: 'text',
                        content: [
                            'You can interact with your application by creating an object that represent it,',
                            'or wrap an application if you know its unqiue identifer, or UUID.'
                        ].join(' ')
                        
                    },
                    {
                        type: 'docsLink',
                        content: 'http://cdn.openfin.co/jsdocs/stable/tutorial-application.getCurrent.html'

                    },                    
                    {
                        type: 'codeWithDomUpdate',
                        content: 'getCurrentApplication'
                    },
                    {
                        type: 'docsLink',
                        content: 'http://cdn.openfin.co/jsdocs/stable/tutorial-application.wrap.html'

                    },
                    {
                        type: 'codeWithDomUpdate',
                        content: 'wrapThisApplication'
                    }
                ]
            },
            {
                header: 'Creating An Application',
                subHeader: 'Launch any web application with the OpenFin API.',
                subSections: [
                    {
                        type: 'text',
                        content: [
                            'Getting an existing web application up and running on OpenFin is as simple as launching it',
                            'on the runtime. We\'ll use the application constructor to launch an existing page with a random',
                            'name and UUID.'
                        ].join(' ')
                    },
                    {
                        type: 'docsLink',
                        content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.Application.html#Application'
                    },
                    {
                        type: 'codeWithInputUpdateDom',
                        content: 'launchApplication',
                        inputLabel: 'Enter a valid URL:'
                    }
                ]
            },
            {
                header: 'Application Manifest',
                subHeader: 'The entry point for your app.',
                subSections: [
                    {
                        type: 'text',
                        content: [
                            'While you can launch your application from an existing URL, you\'ll notice this application\'s',
                            'default appearance is much different than what we just launched. This is where the application manifest',
                            'comes in. The app manifest is a JSON you host alongside your web assets. In here you\'ll create default visual',
                            'settings, as well as specify things like runtime versions, support information, and much more.'
                        ].join(' ')

                    },
                    {
                        type: 'docsLink',
                        content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.Application.html#getManifest'
                    },
                    {
                        type: 'codeWithDomUpdate',
                        content: 'getAppManifest'
                    },
                    {
                        type: 'externalLink',
                        content: 'https://openfin.co/application-config/',
                        linkText: 'Check out the full list of available options here.'
                    }
                ]
            },
            {
                header: 'Lifecycle Controls',
                subHeader: 'Start, close, or restart your Applications',
                subSections: [
                    {
                        type: 'text',
                        content: [
                            'If you launched another page in the demo above, you\'ll notice that by default an application is wrapped in',
                            'an OS frame. In this frameless window, we call close via the API when clicking the configured X in the top',
                            'right corner. Rather than closing the app, try restarting it by clicking the demo below.'
                        ].join(' ')
                    },
                    {
                        type: 'docsLink',
                        content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.Application.html#restart'
                    },
                    {
                        type: 'code',
                        content: 'restartApplication'
                    }

                ]
            },
            {
                header: 'Custom Event Listeners',
                subHeader: 'Application specific event listeners',
                subSections: [
                    {
                        type: 'text',
                        content: 'Built on Chromium, all of the events you\'d use in the browser are available to you in an OpenFin application. Of course, since you\'re in a desktop application, you\'ll want some more to help expand your user\'s experience. Check out our documentation for a list of available events.'
                    },
                    {
                        type: 'docsLink',
                        content: 'http://cdn.openfin.co/jsdocs/stable/tutorial-application.addEventListener.html'
                    }
                ]
            }
        ]
    },
    {
        pageName: 'shortcuts',
        header: 'Shortcuts',
        subHeader: 'Desktop, Start Menu, and System Startup',
        description: 'Step all the way out of the browser with your app with OS level shortcut features',
        sections: [
            {
                header: 'Shortcut Information',
                subHeader: 'Retrieve Info About Shortcuts',
                subSections: [
                    {
                        type: 'text',
                        content: 'Shortcut settings are configurable on launch in your application manifest. You can access the current applications shortcut info via the API. We\'ll use this in the next section to auto-populate the dom before you change the shortcut settings.'
                    },
                    {
                        type: 'docsLink',
                        content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.Application.html#getShortcuts'
                    },
                    {
                        type: 'codeWithDomUpdate',
                        content: 'getShortcutInfo'
                    }
                ]
            },
            {
                header: 'Set Shortcuts',
                subHeader: 'Create and update your application shortcuts',
                subSections: [
                    {
                        type: 'text',
                        content: [
                            'Feel free to update this applications shortcuts by selecting or de-selecting one of the options below.',
                            'Keep in mind, in the app manifest you can also point to an app specific icon with your own branding.'
                        ].join(' ')

                    },
                    {
                        type: 'docsLink',
                        content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.Application.html#setShortcuts'
                    },
                    {
                        type: 'custom',
                        content: 'shortcuts'
                    }
                ]
            }
        ]
    }
];

applicationSections.forEach(page => {
    page.section = 'applications';
    page.sectionIcon = 'call_to_action';
    page.path = `/applications/${page.pageName}/`;
});

export default applicationSections;
