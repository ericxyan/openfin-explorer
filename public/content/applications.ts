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
