import style from 'styles/common.styl';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import DevTools from 'mobx-react-devtools';

import appStore from 'store/AppStore';

import Menu from 'components/Router/Menu';
import Container from 'components/Router/Container';

const stores = { appStore };

render(
    <Provider {...stores}>
        <Router>
            <div>
                <Menu />
                <Container />
                {/* <DevTools /> */}
            </div>            
        </Router>
    </Provider>,
    document.getElementById('root')
);