const communicationSection = [
    {
        path: '/communication/shared-memory',
        section: 'communication',
        sectionIcon: 'phone_in_talk',
        header: 'Child <-> Parent',
        subHeader: 'Communicate between child and parent windows',
        description: 'Shared memory makes for fast, efficient communication',
        sections: [
            {
                header: 'Directly interact via memory',
                subHeader: 'Modify DOM Elements or access defined global variables',
                subSections: [
                    {
                        type: 'text',
                        content: [
                            'Launch a whild window to update a dom element in this application.'
                        ]
                    },
                    {
                        type: 'code',
                        content: 'sharedMemoryCommunication'
                    }
                ]
            }
        ]
    },
    {
        path: '/communication/inter-app-bus',
        section: 'communication',
        sectionIcon: 'phone_in_talk',
        header: 'InterApplicationBus',
        subHeader: 'Communicate between different applications',
        description: 'Publish, Subscribe or directly Send messages to other Apps',
        sections: [
            {
                header: 'Subscribe',
                subHeader: 'Listen for messages from a publishing application',
                subSections: [
                    {
                        type: 'text',
                        content: [
                            'The InterApplicationBus follows the standard publish-subscribe paradigm.',
                            'The demo below will launch another application and then subscribe to messages specifically',
                            'from that application. You can also subscribe to specific topics from any application with *.'
                        ].join(' ')
                    },
                    {
                        type: 'docsLink',
                        content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.InterApplicationBus.html#.subscribe'
                    },
                    {
                        type: 'codeWithDomUpdate',
                        content: 'interAppBusSubscribe'
                    }
                ]
            },
            {
                header: 'Publish',
                subHeader: 'Publish data to other applications that are subscribed',
                subSections: [
                    {
                        type: 'text',
                        content: [
                            'The other side of the coin is publishing a message. You can always publish,',
                            'it\'s up to other applications to subcribe and process the message. A message can be any',
                            'primitive or collection of key-value pairs. In this demo, we\'ll launch another application',
                            'that is pre-programmed to listen for messages from this app.'
                        ].join(' ')
                    },
                    {
                        type: 'docsLink',
                        content: 'http://cdn.openfin.co/jsdocs/stable/fin.desktop.InterApplicationBus.html#.publish'
                    },
                    {
                        type: 'codeWithInput',
                        content: 'interAppBusPublish',
                        inputLabel: 'Your Portion of the Message: '
                    }
                ]
            }
        ]
    }];

export default communicationSection;
