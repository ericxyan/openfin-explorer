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
                        content: 'The getMonitorInfo method enables mutli-monitor application development with ease.'
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
                        content: 'Use the mouse position to move items to the cursor location.'
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
                        content: 'Access the traditional way, with a right click -> Inspect, or make an API call to show the DevTools'
                    },
                    {
                        type: 'code',
                        content: 'showDeveloperTools'
                    },
                    {
                        type: 'docsLink',
                        content: 'http://cdn.openfin.co/jsdocs/stable/tutorial-system.showDeveloperTools.html'
                    }
                ]
            }
        ]
    }
];

export default systemSections;
