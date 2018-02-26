import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Applications from './applications';
import GettingStarted from './gettingStarted';
import { Close, Maximize, Minimize } from '../controls';

const Pages = () => {
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
                    <Route exact path='/applications' component={Applications} />
                    <Route exact path='/getting-started' component={GettingStarted} />
                </Switch>
            </div>
        </div>
    );
};

export default Pages;