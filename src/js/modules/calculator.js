import $ from 'jquery';
import noUiSlider from 'nouislider';

(() => {

    const container = $('.calc');

    if (!container.length) return;

    const root               = $('body');
    const sliderContainer    = container.find('.slider');
    const slider             = sliderContainer.find('.slider__base');
    const sliderValue        = sliderContainer.find('.slider__value')[0].firstChild;
    const totalValue         = container.find('.calc__result');
    const stowage            = container.find('input[name="stowage"]');
    const reserve            = container.find('input[name="reserve"]');

    const initialValue       = 24;
    const CAPACITY           = 1.75;

    let space                = slider.data('init') || initialValue;
    let timeout              = null;

    console.log(slider.data());

    const { min, max, init } = slider.data();

    noUiSlider.create(slider[0], {
        start: init || initialValue,
        range: {
            min: min || 0,
            max: max || 100
        }
    });

    calculate(1);

    const handle = slider.find('.noUi-handle');

    handle.on('mousedown', () => {
        sliderContainer.addClass('is-active');

        root.one('mouseup', () => {
            sliderContainer.removeClass('is-active');
        });
    });

    stowage.on('change', calculate);
    reserve.on('change', calculate);

    slider[0].noUiSlider.on('slide', function(valuesStr, handleIndex, valuesInt, what) {
        [ space ] = valuesInt;
        calculate();
    });

    function formatValue(space) {
        return `${space.toFixed(1).replace('.', ',')} `;
    }

    function getPackAmount(space) {
        return space
            * (+stowage.filter(':checked').val() || 1)
            * (+reserve.filter(':checked').val() || 1)
            / CAPACITY;
    }

    function highlight() {
        totalValue.addClass('omg');
        setTimeout(() => totalValue.removeClass('omg'), 500);
    }

    function calculate(silent) {
        sliderValue.textContent = formatValue(space);
        totalValue.text(Math.ceil(getPackAmount(space)));

        if (silent) return;
        clearTimeout(timeout);
        timeout = setTimeout(highlight, 200);
    }

})();
