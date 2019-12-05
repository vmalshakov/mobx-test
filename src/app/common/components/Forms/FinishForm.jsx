import React, { Component } from 'react';
import Form from './Form';
import LinkButton from '../Router/LinkButton';

export default class FinishForm extends Form {
    finish() {
        this.props.form.valid = true;
        return true;
    }
    render() {
        return <form className="form">
            {/* <h3>{this.props.form.title}</h3> */}
            <div className="form__row">
                <LinkButton url="/paydata">
                    Prev
                </LinkButton>
                <LinkButton
                    url="/success"
                    onLeaveHook={this.finish.bind(this)}>
                    Finish
                </LinkButton>
            </div>
        </form>
    }
};