import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { inject } from 'mobx-react';
import Chevron from './Chevron';

import style from './style.styl';

@inject('appStore')
export default class Menu extends Component {
    render() {
        const personalDataForm = this.props.appStore.personalDataForm;
        const payDataForm = this.props.appStore.payDataForm;
        const finishForm = this.props.appStore.finishForm;
        return  <div className="header">
            <h1>My test app</h1>
            <div className="menu">
                <NavLink exact
                    className={'menu__item' + ((personalDataForm.valid)? ' menu__item--valid':'')}
                    activeClassName="menu__item--active"
                    to="/">
                    {personalDataForm.title}
                </NavLink>
                <Chevron />
                <NavLink
                    className={'menu__item' + ((payDataForm.valid)? ' menu__item--valid':'')}
                    activeClassName="menu__item--active"
                    to="/paydata">
                    {payDataForm.title}
                </NavLink>
                <Chevron />
                <NavLink
                    className={'menu__item' + ((finishForm.valid)? ' menu__item--valid':'')}
                    activeClassName="menu__item--active"
                    to="/submit">
                    {finishForm.title}
                </NavLink>
            </div>
        </div>
    }
};