const applicationSections = [
    {
        pageName: 'about',
        header: 'OpenFin Applications',
        subHeader: 'An application operating on the OpenFin Runtime',
        description: 'The Application class lets you control your multi-window application and add OS level features',
        sections: [
            {
                header: 'Controlling Applications',
                subHeader: 'You can launch other apps from within an app, etc.'
            },
            {
                header: 'The Application Class',
                subHeader: 'Interact with this application or any other on the Runtime.',
                subSections: [
                    {
                        type: 'text',
                        content: 'Retrieve the current application object with the OpenFin API'
                    },
                    {
                        type: 'codeWithDomUpdate',
                        content: 'getCurrentApplication'
                    },
                    {
                        type: 'docsLink',
                        content: 'http://cdn.openfin.co/jsdocs/stable/tutorial-application.getCurrent.html'

                    }
                ]
            },
            {
                header: 'Creating An Application',
                subHeader: 'Launch any web application with the OpenFin API.',
                subSections: [
                    {
                        type: 'text',
                        content: 'To launch an application, you\'ll need to assign a unique identifier, or UUID, and a URL for the app. Since OpenFin applications are built on modern day web technology, you can point to an existing web application right out of the box. Enter a valid URL in the box below to launch your site as an OpenFin Application.'
                    },
                    {
                        type: 'codeWithInputUpdateDom',
                        content: 'launchApplication'
                    }
                ]
            },
            {
                header: 'Application Manifest',
                subHeader: 'The entry point for your app.',
                subSections: [
                    {
                        type: 'text',
                        content: 'The application manifest is a JSON you host alongside your web application that contains configuration information for your app on startup. You can retrive the current application\'s manifest with the API.'
                    },
                    {
                        type: 'codeWithDomUpdate',
                        content: 'getAppManifest'
                    },
                    {
                        type: 'externalLink',
                        content: 'https://openfin.co/application-config/'
                    }
                ]
            },
            {
                header: 'Lifecycle Controls',
                subHeader: 'Start, close, or restart your Applications',
                subSections: [
                    {
                        type: 'text',
                        content: 'You\'ll need to be able to close or restart your application outside of the OS window features. Click the demo below to call restart on this application.'
                    },
                    {
                        type: 'code',
                        content: 'restartApplication'
                    },
                    {
                        type: 'docsLink',
                        content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.Application.html#restart'
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
                        content: 'We\'ll use the API to retrieve the current shortcut information, then use another method to update them to your preferences. The shortcuts are originally set in your Application Manifest.'
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
