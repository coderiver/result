/*global TweenMax*/
import $ from 'jquery';
import 'svgxuse';
import 'gsap';
import ScrollMagic from 'scrollmagic';

import './modules/menu';
import './modules/calculator';

import initSelectPlugin from './plugins/select';
import navColorChange from './plugins/nav-color-change';

initSelectPlugin($);
$('.select').select();

navColorChange();


(() => {

    const mapLocationSelect = $('.map-select');

    if (!mapLocationSelect.length) return;

    mapLocationSelect.select({
        selectors: {
            button: '.map-select__current span',
            option: '.map-select__item'
        }
    });

    mapLocationSelect.on('change', (e, val) => {
        console.log(val);
    });

})();


(() => {

    /**
     * Parallax for logotype on red background
     */

    const redLine = $('.v-line');

    if (!redLine.length) return;

    const controller    = new ScrollMagic.Controller({ container: 'body' });
    const logotype      = redLine.find('.logotype-full');
    const duration      = redLine.outerHeight();
    const factor        = 0.7;

    new ScrollMagic.Scene({
        duration,
        triggerElement: redLine[0],
        triggerHook: 'onLeave'
    }).on('progress', (e) => {

        TweenMax.set(logotype, {
            y: duration * e.progress * factor
        });

    }).addTo(controller);

})();

$('html').removeClass('no-js');
