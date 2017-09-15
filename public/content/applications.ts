const applicationSections = [
    {
        section: 'applications',
        path: '/applications/about',
        sectionIcon: 'call_to_action',
        header: 'OpenFin Applications',
        subHeader: 'An app operating on the OpenFin Runtime',
        description: 'Control your multi-window application and add OS level features',
        sections: [
            {
                header: 'text',
                subHeader: 'Applications!'
            },
            {
                header: 'Lifecycle Controls',
                subHeader: 'Start, close, or restart your Applications',
                subSections: [
                    {
                        type: 'text',
                        content: 'You\'ll need to be able to close or restart your application outside of the OS window features'
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

export default applicationSections;
