import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { inject } from 'mobx-react';

import asyncComponent from 'components/Async/Async';
import Page404 from 'components/Pages/Page404';
import SuccessPage from 'components/Pages/SuccessPage';

const PersonalDataPage = asyncComponent(() =>
    import('components/Pages/PersonalDataPage').then(module => module.default)
);
const PayDataPage = asyncComponent(() =>
    import('components/Pages/PayDataPage').then(module => module.default)
);
const FinishPage = asyncComponent(() =>
    import('components/Pages/FinishPage').then(module => module.default)
);

@inject('appStore')
export default class Container extends Component {
    render() {
        return  <div className="forms-container">
            <Switch>
                <Route exact path="/" component={PersonalDataPage} />
                <Route path="/paydata" component={PayDataPage} />
                <Route path="/submit" component={FinishPage} />
                <Route path="/success" component={SuccessPage} />
                <Route component={Page404} />
            </Switch>
        </div>
    }
};