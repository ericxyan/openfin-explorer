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
                            ''
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
        header: 'inter application bus',
        subHeader: 'communicate between different applications',
        description: 'emit event messages that can be subscribed to by other applicaitons and windows.',
        sections: [
            {
                header: 'subscribe',
                subHeader: 'subscribe to data sent by other applications.',
                subSections: [
                    {
                        type: 'text',
                        content: 'try the demo below to send data to a subscribed application.'
                    },
                    {
                        type: 'code',
                        content: 'interAppBusSubscribe'
                    },
                    {
                        type: 'text',
                        content: 'publish from the new window to send data to the original application.'
                    }
                ]
            },
            {
                header: 'publish',
                subHeader: 'publish data to other applications that are subscribed.',
                subSections: [
                    {
                        type: 'text',
                        content: 'publish data through the bus to subcribers.'
                    },
                    {
                        type: 'code',
                        content: 'interAppBusPublish'
                    }
                ]
            }
        ]
    }];

export default communicationSection;
