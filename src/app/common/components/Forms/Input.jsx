import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import FieldModel from 'store/models/Field'

@observer
class Input extends Component {
    render() {
        const { field } = this.props;
        return <div className={'form__input' + ((!field.valid) ?' form__input--error': '')}>
            <input
                {...this.props}
                name={field.name}
                placeholder={field.placeholder}
                defaultValue={field.value || field.defaultValue}
                type={field.type} />
            {
                (!field.valid) ? 
                    <div className="form__error-msg">{field.error_text}</div>
                :false
            }
        </div>
    }
};

Input.propTypes = {
    field: PropTypes.instanceOf(FieldModel)
};

export default Input;