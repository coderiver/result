import $ from 'jquery';
import noUiSlider from 'nouislider';

const $container = $('.calc');

const $slider = $container.find('.calc__slider');

noUiSlider.create($slider[0], {
    start: 24,
    range: {
        min: 0,
        max: 100
    }
});
