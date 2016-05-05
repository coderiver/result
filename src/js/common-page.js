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
    const previews = $('body').find('.preview');

    navButtons.on('click', function(e) {
        e.preventDefault();
        topareaGallery.slickApiCall('slickGoTo', navButtons.index(this));
    });
    var goto = 0;
    if(window.location.hash) {
      var nomer = window.location.hash.substring(1);
      var bl = $('#nomer'+nomer);
      goto = navButtons.index(bl);
    }
    console.log(goto);

    //initial
    title.text(navButtons.eq(goto).text());
    previews.hide();
    previews.eq(goto).show();
    navButtons.filter('.is-selected').removeClass('is-selected');
    navButtons.eq(goto).addClass('is-selected');
    topareaGallery.getElement().slick('slickGoTo',goto);
    

    topareaGallery.getElement().on('beforeChange', (e, slick, current, next) => {
        const clicked = navButtons.eq(next);
        previews.hide();
        previews.eq(next).show();

        navButtons.filter('.is-selected').removeClass('is-selected');
        clicked.addClass('is-selected');

        title.fadeOut(400, () => {
            title.text(clicked.data('text') || clicked.text());
            title.fadeIn(400);
        });
    });

})();

(() => {

    /**
     * Filter and tabs on catalog page
     */

    const tabs = $('.js-laminat');
    // const tabs = $('.tab-btn-group');

    tabs.children('button').click(function(event) {
        $(this).siblings().removeClass('is-active');
        $(this).addClass('is-active');
        $('.tab1,.tab2').hide();
        $('.'+$(this).data('tab')).show();
    });

    var array;
    function getval(group){
        array = [];
        $("."+group+" input:checkbox[name="+group+"]:checked").each(function(){
            array.push($(this).val());
        });
        return array;
    }

    $('.check-group input').change(function(event) {
        var ton = getval('ton');
        var thickness = getval('thickness');
        var classes = getval('class');
        console.log(ton,thickness,classes);
        $('.tile_1-3').each(function(index, el) {
            var this_ton = $(this).data('ton')+'';
            var this_thickness = $(this).data('thick')+'';
            var this_classes = $(this).data('class')+'';
            console.log(this_ton,this_thickness,this_classes,ton,thickness,classes,ton.indexOf(this_ton));
            // if(ton.indexOf(this_ton) !== -1){
            if(ton.indexOf(this_ton) !== -1 && thickness.indexOf(this_thickness) !== -1 && classes.indexOf(this_classes) !== -1){
                $(this).show();
                // alert('show');
            }
            else{
                $(this).hide();
            }
        });
    });

})();






$('html').removeClass('no-js');
