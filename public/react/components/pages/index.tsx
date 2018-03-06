import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Close, Maximize, Minimize } from '../controls';
import Page from './page';
import pages from './pages';


const Pages = () => {
    const constructedPages = pages.map((page, index) => {
       return  <Route exact key={index} path={page.path} render={() => <Page content={page.content}/> } />;
    });

    return (
        <div className='pages-wrapper'>
            <div className='application-bar'>
                <div className='application-controls'>
                    <Close />
                    <Maximize />
                    <Minimize />
                </div>
            </div>
            <div className='pages-content'>
                <Switch>
                    <Route exact path='/' render={() => { return <h1>Index</h1>; }} />
                    {constructedPages}
                </Switch>
            </div>
        </div>
    );
};

export default Pages;