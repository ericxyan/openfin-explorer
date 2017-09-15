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
                subHeader: 'Notifications are created just like an OpenFin window,' +
                ' but display in the bottom right corner of the user\'s screen.'
            },
            {
                header: 'Create Notification',
                subHeader: 'The notification constructor lets users create a notification',
                subSections: [
                    {
                        type: 'text',
                        content: 'Create a new desktop notification'
                    },
                    {
                        type: 'code',
                        content: 'launchNotification'
                    },
                    {
                        type: 'docsLink',
                        content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.Notification.html'
                    }
                ]
            },
            {
                header: 'Message Passing',
                subHeader: 'Send and receive messages from Notifications',
                subSections: [
                    {
                        type: 'text',
                        content: ''
                    },
                    {
                        type: 'codeWithInput',
                        content: 'sendNotificationWithMessage',
                        inputLabel: 'Enter Your Message: '
                    }
                ]
            }
        ]
    }
];

export default notificationsSections;
