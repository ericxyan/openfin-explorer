const notificationsSections = [
    {
        path: '/notifications/about',
        section: 'notifications',
        sectionIcon: 'chat_bubble_outline',
        header: 'Desktop Alerts',
        subHeader: 'Keep users informed of important events',
        description: 'Notifications are HTML assets capapble of communicating with the rest of your App',
        sections: [
            {
                header: 'About Notifications',
                subHeader: [
                    'Notifications are created just like an OpenFin window,',
                    'but display in the bottom right corner of the user\'s screen.'
                ].join(' ')                
            },
            {
                header: 'Create Notification',
                subHeader: 'Invoke the constructor to launch a new notification.',
                subSections: [
                    {
                        type: 'text',
                        content: [
                            'At a minimum, a notification requires a URL. You can pass in about:blank',
                            'and populate the document on the fly but as you\'ll see we can send custom',
                            'info to our notifications to be consumed on launch.'
                        ].join(' ')
                    },
                    {
                        type: 'docsLink',
                        content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.Notification.html'
                    },                    
                    {
                        type: 'code',
                        content: 'launchNotification'
                    }
                ]
            },
            {
                header: 'Message Passing',
                subHeader: 'Send and receive messages from Notifications',
                subSections: [
                    {
                        type: 'text',
                        content: [
                            'Pass a message in the same style we saw in the InterApplicationBus',
                            'to customize your notifications. In this demo, we\'ll update the innerText',
                            'of the div in notification.html'
                        ].join(' ')
                    },
                    {
                        type: 'codeWithInput',
                        content: 'sendNotificationWithMessage',
                        inputLabel: 'Enter Your Message: '
                    }
                ]
            },
            {
                header: 'Interactive Notifications',
                subHeader: 'Shortcut workflows with notification specific event handlers',
                subSections: [
                    {
                        type: 'text',
                        content: [
                            'Notifications are fully interoperable with the rest of your application',
                            'which means we can actually have them interact with anything on the runtime.',
                            'Two way communication is enabled via the API. In this example, we\'ll listen for a click',
                            'in our demo notification. Be sure to check out the JS Docs for the full list of available',
                            'handlers.'
                        ].join(' ')
                    },
                    {
                        type: 'docsLink',
                        content: 'http://cdn.openfin.co/jsdocs/stable/tutorial-notification.constructor.html'
                    },
                    {
                        type: 'codeWithDomUpdate',
                        content: 'onClickNotification'
                    }
                ]
            }
        ]
    }
];

export default notificationsSections;
