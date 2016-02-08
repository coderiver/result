import $ from 'jquery';
import noUiSlider from 'nouislider';

const $container = $('.calc');

const $slider = $container.find('.slider__base');

if ($container.length) {
    noUiSlider.create($slider[0], {
        start: 24,
        range: {
            min: 0,
            max: 100
        }
        // pips: {
        //     mode: 'steps',
        //     density: 2
        // }
    });

    $slider[0].noUiSlider.on('slide', function(valuesStr, handleIndex, valuesInt, what) {
        $slider
        .parent()
        .find('.slider__value')[0]
        .firstChild
        .textContent = `${valuesInt[handleIndex].toFixed(1)} `;
    });
}
