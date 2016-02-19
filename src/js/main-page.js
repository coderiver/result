/*global TweenMax, Power3*/
import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import 'svgxuse';

import './modules/menu';
import './modules/tab-gallery';

import initSelectPlugin from './plugins/select';
import Gallery from './classes/gallery';

import dispatcher from './lib/dispatcher';
import { MODAL_BEFORE_OPEN, MODAL_AFTER_CLOSE, VIDEO_READY } from './lib/actions';
import { disableScroll, enableScroll } from './lib/util';


const heroGallery = new Gallery('.hero .gs', { autoplay: true });
const controller = new ScrollMagic.Controller({ container: 'body' });
const logotype = $('.parallax-logotype');


initSelectPlugin($);
$('.select').select();


// Download video module on demand
$('.hero__logo').one('click', function() {
    console.info('Now we need to show some preloader for video');
    require.ensure([], function(require) {
        require('./modules/cta-video');
    }, 'video');
});

dispatcher.on(VIDEO_READY, () => {
    console.info('And yet we should hide preloader and show modal with video');
});

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

    const baseOffset = -200;
    let timeout = null;

    [{
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
    }].forEach((section) => {
        const { el, offset } = section;

        new ScrollMagic.Scene({
            triggerElement: el[0],
            triggerHook: 'onCenter',
            offset: offset + baseOffset,
            duration: el.outerHeight()
        }).on('progress', (e) => {
            if (e.scrollDirection !== 'FORWARD') return;

            clearTimeout(timeout);

            timeout = setTimeout(() => {
                scrollBodyTo(el.offset().top + offset);
            }, 500);

            setTimeout(() => {
                $(window).one('scroll', () => {
                    if (!timeout) return;
                    clearTimeout(timeout);
                });
            }, 200);

        }).addTo(controller);
    });

    function scrollBodyTo(pos) {
        console.log('call scroll');
        const scroll = { y: $(window).scrollTop() };

        if (pos < scroll.y) return;

        disableScroll();
        TweenMax.to(scroll, 1, {
            y: pos,
            ease: Power3.easeInOut,
            onUpdate() {
                $('html, body').scrollTop(scroll.y);
            },
            onComplete: enableScroll
        });
    }

})();

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
