import React, { Component } from 'react';
import Form from './Form';
import Input from './Input';
import LinkButton from '../Router/LinkButton';

export default class PersonalDataForm extends Form {
    render() {
        return <form className="form">
            {/* <h3>{this.props.form.title}</h3> */}
            <div className="form__row">
                <Input field={this.fields.first_name} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="form__row">
                <Input field={this.fields.second_name} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="form__row">
                <LinkButton
                    url="/paydata"
                    onLeaveHook={this.checkForm.bind(this)}>
                    Next
                </LinkButton>                
            </div>
        </form>
    }
};