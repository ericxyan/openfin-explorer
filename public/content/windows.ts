const windowsSections = [
{
    path: '/windows/child-window',
    section: 'windows',
    sectionIcon: 'open_in_browser',
    header: 'child windows',
    subHeader: 'Create a collection of windows to build your Application interface',
    description: 'child windows share their parent renderer.',
    sections: [
        {
            header: 'About Windows',
            subHeader: 'Child windows are fully customizable and controllable HTML your users can interact with.'
        },
        {
            header: 'create window',
            subHeader: 'launch a new window from a parent application',
            subSections: [
                {
                    type: 'text',
                    content: 'try demo below to open a child window.'
                },
                {
                    type: 'code',
                    content: 'openWindow'
                }
            ]
        },
        {
            header: 'window details',
            subHeader: 'retrieve information about the current window',
            subSections: [
                {
                    type: 'text',
                    content: 'You can retrieve relevant information about the window via the OpenFin API. Let\'s retrieve the window bounds which we\'ll use to launch a window next to ours.'
                },
                {
                    type: 'code',
                    content: 'getBounds'
                }
            ]
        },
        {
            header: 'close window',
            subHeader: 'close a window from a parent application',
            subSections: [
                {
                    type: 'text',
                    content: 'try demo below to open a child window that will close when the timer expires.'
                },
                {
                    type: 'code',
                    content: 'closeWindow'
                }
            ]
        }
    ]
},
{
    path: '/windows/group',
    section: 'windows',
    sectionIcon: 'open_in_browser',
    header: 'group windows',
    subHeader: 'group windows together.',
    description: 'Supports: Windows',
    sections: [
        {
            header: 'create group',
            subHeader: 'create child windows in the group of the parent window.',
            subSections: [
                {
                    type: 'text',
                    content: 'try demo below to create group.'
                },
                {
                    type: 'code',
                    content: 'groupWindows'
                },
                {
                    type: 'text',
                    content: 'try demo below to move the group.'
                },
                {
                    type: 'text',
                    content: '(Not supported by OSX).'
                },
                {
                    type: 'code',
                    content: 'groupWindowsMoveyBy'
                }
            ]
        }
    ]
},
{
    path: '/windows/move-window',
    section: 'windows',
    sectionIcon: 'open_in_browser',
    header: 'move windows',
    subHeader: 'interact with windows using the OpenFin API',
    description: 'move windows to a location or by a specific amount. add animations to make movements smoother.',
    sections: [
        {
            header: 'move by',
            subHeader: 'move by a certain amount',
            subSections: [
                {
                    type: 'text',
                    content: 'try the demo below to move the current window.'
                },
                {
                    type: 'code',
                    content: 'moveBy'
                }
            ]
        },
        {
            header: 'move to',
            subHeader: 'move to a specific location',
            subSections: [
                {
                    type: 'text',
                    content: 'try the demo below to move the current window to a fixed location.'
                },
                {
                    type: 'code',
                    content: 'moveTo'
                }
            ]
        },
        {
            header: 'animate',
            subHeader: 'animate the window',
            subSections: [
                {
                    type: 'text',
                    content: 'try the demo below to move the current window to a fixed location with an animation.'
                },
                {
                    type: 'code',
                    content: 'animate'
                }
            ]
        }
    ]
}];

export default windowsSections;
