import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import PageComponent from './Page';

export default class PageContainer extends React.Component<PageContainerProps> {
    constructor(props: PageContainerProps) {
        super(props);
    }

    public render() {
        return (
            <Switch>
                {this.props.data.map((pageData, i) => {
                    const extraProps = this.props.data[i];
                    return <Route key={i} exact path={pageData.path} render={(pageData) => {
                        return <PageComponent {...pageData} data={extraProps} />;
                    }} />;
                })}
            </Switch>
        );
    }
}
