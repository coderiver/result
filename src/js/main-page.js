/*global TweenMax, Power3*/
import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import 'svgxuse';

import './modules/menu';
import './modules/tab-gallery';
import './modules/footer-map';

import navColorChange from './plugins/nav-color-change';
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

navColorChange(controller);


// Download video module on demand
$('.js-video').one('click', function() {
    console.info('Now we need to show some preloader for video');
    $('.modal-video__preloader').fadeIn();
    // alert('show preloader');
    require.ensure([], function(require) {
        require('./modules/cta-video');
    }, 'video');
});

$('.js-catalog').click(function(event) {
    $('html, body').animate({
       scrollTop: $(".to-catalog").offset().top
   }, 500);
    return false;
});

dispatcher.on(VIDEO_READY, () => {
    $('.modal-video__preloader').fadeOut();
    // alert('hide preloader');
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
        el: $('.subhero'),
        offset: 0
    }, {
        el: $('.gallery'),
        offset: 0
    }, {
        el: $('.products'),
        offset: -70
    }].forEach((section) => {
        const { el, offset } = section;
        if (!el.length) return;

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

$('html').removeClass('no-js');
