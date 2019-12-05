import { observable } from 'mobx';
import { Validator } from 'utils/validators';

const DEFAULT_ERROR_TEXT = 'Something went wrong';

class Field {

    @observable value
    @observable valid

    setValue(value) {
        this.value = value;
    }

    onChange(value) {
        this.setValue(value);
    }

    validate() {
        if (this.hasValidator) {
            const validator = this.validator(this.value)
            if (validator instanceof Validator){
                this.valid = validator.valid;
                this.error_text = validator.error_text || DEFAULT_ERROR_TEXT;
            }else{
                console.error('Use Validator class, please')
                this.valid = false;    
            }
        } else {
            this.valid = true;
        }
        return this.valid;
    }

    constructor(data) {
        this.name = data.name;
        this.defaultValue = data.defaultValue;
        this.value = data.defaultValue;
        this.type = data.type;
        this.placeholder = data.placeholder;
        this.validator = data.validator;
        this.error_text = DEFAULT_ERROR_TEXT;

        this.onChange = this.onChange.bind(this);
        this.validate = this.validate.bind(this);

        this.hasValidator = !!(typeof this.validator == 'function');
        if (this.hasValidator) {
            this.validator = this.validator.bind(this);
        }

        this.valid = true;
        // this.validate()
    }
}

export default Field;