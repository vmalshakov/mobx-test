class Validator {
    constructor(data){
        this.valid = data.valid;
        this.error_text = data.error_text;
    }
};

const emptyValidate = function (value) {
    const valid = !!(value && value.trim().length > 0);
    const error_text = 'Field can\'t be empty';
    return new Validator({
        valid,
        error_text
    })
};

export {
    Validator,
    emptyValidate
};