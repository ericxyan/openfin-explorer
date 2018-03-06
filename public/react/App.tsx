import * as React from 'react';
import { HashRouter } from 'react-router-dom';

import NavBar from './components/nav-bar';
import SideNav from './components/Side-Nav';
import Pages from './components/pages';
import content from '../content';

export default class App extends React.Component <{}, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <HashRouter>
                <div id='main' className='container-fluid'>
                    <div className='row no-gutters'>
                        <div className='col-3'>
                            <NavBar />
                        </div>
                        <div className='col-9'>
                            <Pages />
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}
