import $ from 'jquery';
import 'svgxuse';
import 'gsap';
import ScrollMagic from 'scrollmagic';

import './modules/menu';
import './modules/calculator';

import initSelectPlugin from './plugins/select';

initSelectPlugin($);
$('.select').select();


(() => {

    /**
     * Parallax for logotype on red background
     */

    const redLine = $('.v-line');

    if (!redLine.length) return;
    console.log('parallax active');

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
