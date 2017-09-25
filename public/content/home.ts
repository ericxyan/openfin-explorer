const homepage = [
    {
        path: '/',
        section: 'Welcome',
        sectionIcon: 'sentiment_very_satisfied',
        header: 'The Javascript API',
        subHeader: 'An interactive demo application.',
        description: 'Build multiwindow desktop applications using HTML and Javascript',
        sections: [
            {
                header: 'Welcome!',
                subHeader: [
                    'This application was designed to introduce you to the OpenFin API.',
                    'The Javascript API is exposed as a global variable in the fin.desktop object.',
                    'Some applications are developed OpenFin first - as in built with the desktop',
                    'in mind. Others are deployed to the web and then expanded using the API\'s features.'
                ].join(' ')
            },            {
                header: 'Code Examples',
                subHeader: [
                    'Throughout this application, you\'ll find interactive demos that demonstrate',
                    'the API\'s capabilities. This project is open sourced, for those interested in',
                    'diving deeper.'
                ].join(' ')
            }
        ]
    }
];

export default homepage;
