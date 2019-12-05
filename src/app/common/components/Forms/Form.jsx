import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import local_storage from 'utils/local_storage';

import FormModel from 'store/models/Form';

import style from './style.styl'

@observer
class Form extends Component {
    componentWillMount() {
        this.fields = {}
        this.props.form.fields.map(field => {
            this.fields[field.name] = field
        })
    }
    checkForm() {
        local_storage.set(this.props.form.name, {
            fields: this.props.form.getValues(),
            valid: this.props.form.validate(),
        })
        return this.props.form.validate();
    }
    handleChange(e) {
        this.props.form.getField(e.target.name).onChange(e.target.value)
    }
    onSubmit(e) {
        e.preventDefault();
        console.log('this.props.form.validate()', this.props.form.validate())
        console.log('this.props.form.valid', this.props.form.valid)
        console.log('this.props.form.getValues()', this.props.form.getValues())
        if (typeof this.afterSubmit == 'function'){
            this.afterSubmit.call(this)
        }
    }
};

Form.propTypes = {
    form: PropTypes.instanceOf(FormModel)
};

export default Form;