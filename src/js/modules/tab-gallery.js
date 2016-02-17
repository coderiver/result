/*global TweenMax Power1 Power3*/
import $ from 'jquery';
import 'gsap';
import Gallery from '../classes/gallery';

const text = $('.gallery__text');
const gallery = new Gallery('.gallery .gs', {
    arrows: true,
    dots: true,
    speed: 600
});

TweenMax.set(text.not(':first'), { autoAlpha: 0 });

gallery.getElement().on('beforeChange', (e, slick, currentIndex, nextIndex) => {
    hide(text.eq(currentIndex));
    show(text.eq(nextIndex));
});

function show(el) {
    TweenMax.fromTo(el, 0.5, {
        y: 500,
        autoAlpha: 0
    }, {
        y: 0,
        autoAlpha: 1,
        ease: Power3.easeOut
    });
}

function hide(el) {
    TweenMax.fromTo(el, 0.5, {
        y: 0,
        autoAlpha: 1
    }, {
        y: -500,
        autoAlpha: 0,
        ease: Power1.easeOut
    });
}
