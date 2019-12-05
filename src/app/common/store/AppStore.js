import { observable, computed, reaction } from 'mobx';
import Field from './models/Field';
import Form from './models/Form';

import { emptyValidate } from 'utils/validators';
import local_storage from 'utils/local_storage';

const getStoredField = function(form_name, field_name) {
    const form = local_storage.get(form_name);
    if (form){
        const fields = form.fields;
        return fields[field_name];
    }
    return '';
};
const getStoredValid = function(form_name) {
    const form = local_storage.get(form_name);
    if (form){
        return form.valid;
    }
    return false;
};

class AppStore {
    @observable personalDataForm = new Form({
        name: 'personalDataForm',
        title: 'Personal Data',
        valid: getStoredValid('personalDataForm'),
        fields: [
            new Field({
                name: 'first_name',
                defaultValue: getStoredField('personalDataForm', 'first_name'),
                type: 'text',
                placeholder: 'Enter your name',
                validator: emptyValidate
            }),
            new Field({
                name: 'second_name',
                defaultValue: getStoredField('personalDataForm', 'second_name'),
                type: 'text',
                placeholder: 'Enter your second name',
                validator: emptyValidate
            })
        ]
    });
    
    @observable payDataForm = new Form({
        name: 'payDataForm',
        title: 'Pay Data',
        valid: getStoredValid('payDataForm'),
        fields: [
            new Field({
                name: 'card_number',
                defaultValue: getStoredField('payDataForm', 'card_number'),
                type: 'text',
                placeholder: 'card number',
                validator: emptyValidate
            })
        ]
    });

    @observable finishForm = new Form({
        name: 'finishForm',
        title: 'Submit Data',
        valid: getStoredValid('finishForm')
    });

};

const appStore = new AppStore();

export default appStore;