import $ from 'jquery';

const dispatcher = {
    _o: $({}),

    on(...args) {
        this._o.on(...args);
    },

    one(...args) {
        this._o.one(...args);
    },

    off(...args) {
        this._o.off(...args);
    },

    trigger(...args) {
        this._o.trigger(...args);
    }
};

export default dispatcher;
