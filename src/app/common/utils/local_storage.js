const STORAGE_NAME = 'my_app_local_storage';
const local_storage = {
    set: (prop_name, value) => {
        let ls = localStorage.getItem(STORAGE_NAME) ? JSON.parse(localStorage.getItem(STORAGE_NAME)) : {};
        ls[prop_name] = value;
        localStorage.setItem(STORAGE_NAME, JSON.stringify(ls));
    },
    get: (prop_name) => {
        if (!prop_name) {
            return localStorage.getItem(STORAGE_NAME) ? JSON.parse(localStorage.getItem(STORAGE_NAME)) : {};
        }
        let ls = JSON.parse(localStorage.getItem(STORAGE_NAME));
        return (ls && ls[prop_name]) ? ls[prop_name] : false;
    },
    reset: () => {
        localStorage.setItem(STORAGE_NAME, JSON.stringify({}));
    }
};

export default local_storage;