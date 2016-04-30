/*global TweenMax*/
import $ from 'jquery';
import 'svgxuse';
import 'gsap';
import 'slick-carousel';
import 'magnific-popup';
import initTooltipster from './lib/tooltipster';
import ScrollMagic from 'scrollmagic';

import './modules/menu';
import './modules/calculator';
//import './modules/footer-map';

import initSelectPlugin from './plugins/select';
import navColorChange from './plugins/nav-color-change';
import Gallery from './classes/gallery';

initSelectPlugin($);
initTooltipster($, window, window.document);
navColorChange();
$('.select').select();
$('.js-tooltip').tooltipster();

(() => {

    const fancy = $('.js-fancy');
    if (!fancy.length) return;

    fancy.magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
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

(() => {

    /**
     * Topare slider for catalog item page
     */

    const toparea = $('.toparea');
    if (!toparea.length) return;

    const topareaGallery = new Gallery(toparea.find('.toparea-gallery'));
    const navButtons = toparea.find('.select-buttons-group').find('.btn');
    const title = toparea.find('.toparea__subtitle');

    navButtons.on('click', function(e) {
        e.preventDefault();
        topareaGallery.slickApiCall('slickGoTo', navButtons.index(this));
    });
    title.text(navButtons.eq(0).text());


    topareaGallery.getElement().on('beforeChange', (e, slick, current, next) => {
        const clicked = navButtons.eq(next);

        navButtons.filter('.is-selected').removeClass('is-selected');
        clicked.addClass('is-selected');

        title.fadeOut(400, () => {
            title.text(clicked.data('text') || clicked.text());
            title.fadeIn(400);
        });
    });

})();

$('html').removeClass('no-js');
