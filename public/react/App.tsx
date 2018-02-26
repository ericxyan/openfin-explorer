import * as React from 'react';
import { HashRouter } from 'react-router-dom';

import NavBar from './components/nav-bar';
import PageContainer from './components/Page-Container';
import SideNav from './components/Side-Nav';
import Pages from './components/pages';
import content from '../content';

export default class App extends React.Component {
    constructor(props: any) {
        super(props);
    }

    private makeSideNavData() {
        const navigation = {};

        for (let i = 0; i < content.length; i++) {
            const page = content[i];
            const navItem = {
                path: page.path,
                header: page.header,
                icon: page.sectionIcon
            };

            if (navigation[page.section]) {
                navigation[page.section].push(navItem);
            } else {
                navigation[page.section] = [navItem];
            }
        }

        return navigation;
    }

    private setTitle(): void {
        fin.desktop.System.getVersion(version => {
            const ofVersion = document.querySelector('title');
            ofVersion.innerText = `OpenFin Explorer | Version: ${version}`;
        });
    }

    public render() {
        this.setTitle();

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
