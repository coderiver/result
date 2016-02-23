function initSelectPlugin($) {
    const root = $('body');
    const defaults = {
        activeClass: 'is-active',
        selectedClass: 'is-selected',
        selectors: {
            button: '.select__button',
            option: '.select__item'
        }
    };

    class Select {
        constructor(el, settings) {
            this.settings = $.extend(true, {}, defaults, settings);
            const { button, option } = this.settings.selectors;

            this.el = (el instanceof $) ? el : $(el);
            this.button = this.el.find(button);
            this.options = this.el.find(option);
            this.optionSelected = null;

            this._optionClickHandler = this._optionClickHandler.bind(this);
            this._openOptionsList = this._openOptionsList.bind(this);
            this._closeOptionsList = this._closeOptionsList.bind(this);

            this._updateCurrentValue(
                this.options.filter(`.${this.settings.selectedClass}`),
                true
            );

            this._bindEvents();
        }

        _bindEvents() {
            this.el.one('click', this._openOptionsList);
            this.options.on('click', this._optionClickHandler);
        }

        _optionClickHandler(e) {
            this.optionSelected = $(e.target);
            this._updateCurrentValue();
            this._updateOptionsClasses();
        }

        _openOptionsList() {
            const { activeClass } = this.settings;
            this.el.addClass(activeClass);
            setTimeout(() => {
                root.one('click', this._closeOptionsList);
            }, 0);
        }

        _closeOptionsList() {
            const { activeClass } = this.settings;
            this.el.removeClass(activeClass);
            setTimeout(() => {
                this.el.one('click', this._openOptionsList);
            }, 0);
        }

        _updateCurrentValue(option, silent = false) {
            const selected = option || this.optionSelected;

            if (selected === null || !selected.length) return;

            const text = selected.text().trim();
            const value = selected.data('value');

            this.button.text(text);
            this.el.attr('title', text);
            this.el.attr('data-value', (typeof value === 'object') ? JSON.stringify(value) : value);

            if (!silent) this.el.trigger('change', [value, text]);
        }

        _updateOptionsClasses() {
            const selected = this.settings.selectedClass;
            this.options.filter(`.${selected}`).removeClass(selected);
            this.optionSelected.addClass(selected);
        }
    }

    $.fn.select = function(options) {
        $.each(this, function(index, el) {
            new Select(el, options);
        });

        return this;
    };
}

export default initSelectPlugin;
