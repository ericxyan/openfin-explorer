import * as React from 'react';

const searchStyle = {
    position: 'absolute' as 'absolute',
    bottom: 0,
    backgroundColor: '#000',
    width: '100%',
    height: '42px'
};

export default class Search extends React.Component <{}, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div style={searchStyle}>Search!</div>
        );
    }
}
