const communicationSection = [
{
    path: '/communication/shared-memory',
    section: 'communication',
    sectionIcon: 'phone_in_talk',
    header: 'shared memory',
    subHeader: 'access the DOM and javascript',
    description: 'communicate between windows using javascript memory.',
    sections: [
        {
            header: 'send data from child to parent',
            subHeader: 'used shared memory to send data',
            subSections: [
                {
                    type: 'text',
                    content: 'try the demo below to send data to parent window.'
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
