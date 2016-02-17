/*global TweenMax, Power3*/
import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import 'svgxuse';

import './modules/menu';
import './modules/cta-video';
import './modules/tab-gallery';

import initSelectPlugin from './plugins/select';
import Gallery from './classes/gallery';

import dispatcher from './lib/dispatcher';
import { MODAL_BEFORE_OPEN, MODAL_AFTER_CLOSE } from './lib/actions';
import { disableScroll, enableScroll } from './lib/util';


const heroGallery = new Gallery('.hero .gs', { autoplay: true });
const controller = new ScrollMagic.Controller({ container: 'body' });
const logotype = $('.parallax-logotype');


initSelectPlugin($);
$('.select').select();

dispatcher.on(MODAL_BEFORE_OPEN, () => {
    heroGallery.slickApiCall('slickPause');
    disableScroll();
});

dispatcher.on(MODAL_AFTER_CLOSE, () => {
    heroGallery.slickApiCall('slickPlay');
    enableScroll();
});

(() => {

    /**
     * Logotype parallax
     */

    const hero = $('.hero');
    const start = hero.outerHeight();
    const end = $('.footer').offset().top;
    const duration = end - start;
    const factor = 0.7;

    new ScrollMagic.Scene({
        duration,
        triggerElement: hero[0],
        triggerHook: 'onLeave'
    }).on('progress', (e) => {

        TweenMax.set(logotype, {
            y: duration * e.progress * factor
        });

    }).addTo(controller);

})();


(() => {

    /**
     * Autoscroll
     */

    const baseOffset = -100;

    [
        {
            el: $('.promo-text'),
            offset: -145
        }, {
            el: $('.gallery'),
            offset: 0
        }, {
            el: $('.products'),
            offset: -70
        }, {
            el: $('.map'),
            offset: -70
        }
    ].forEach((section) => {
        const { el, offset } = section;

        new ScrollMagic.Scene({
            triggerElement: el[0],
            triggerHook: 'onCenter',
            offset: offset + baseOffset
        }).on('start', (e) => {

            if (e.scrollDirection !== 'FORWARD') return;

            const scroll = {
                y: $(window).scrollTop()
            };

            disableScroll();
            TweenMax.to(scroll, 0.5, {
                y: el.offset().top + offset,
                ease: Power3.easeOut,
                onUpdate() {
                    $('html, body').scrollTop(scroll.y);
                },
                onComplete: enableScroll
            });

        }).addTo(controller);
    });

})();
