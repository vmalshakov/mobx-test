import React, { Component } from 'react';
import Form from './Form';
import Input from './Input';
import LinkButton from '../Router/LinkButton';

export default class PayDataForm extends Form {
    render() {
        return <form className="form">
            {/* <h3>{this.props.form.title}</h3> */}
            <div className="form__row">
                <Input field={this.fields.card_number} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="form__row">
                <LinkButton url="/">
                    Prev
                </LinkButton>
                <LinkButton
                    url="/submit"
                    onLeaveHook={this.checkForm.bind(this)}>
                    Next
                </LinkButton>
            </div>
        </form>
    }
};