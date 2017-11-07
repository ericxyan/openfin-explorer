import * as React from 'react';
import Logo from './logo';
import Menu from './menu';
import Search from './search';

export default class NavBar extends React.Component <{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div className='nav-bar'>
                <Logo />
                <Menu />
                <Search />
            </div>
        );
    }
}
