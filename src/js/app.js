import $ from 'jquery';
import './modules/calculator';
import './modules/menu';
import './modules/cta-video';
import initSelectPlugin from './plugins/select';
import Gallery from './classes/gallery';

initSelectPlugin($);

$('.select').select();

const gallery = new Gallery('.gallery .gs', { arrows: true, dots: true });
const heroGallery = new Gallery('.hero .gs', { autoplay: true });

let clickCount = 0;

//$('.controll-btn-volume').on('click', function(e) {
//    let className = this.className;
//    this.className = className.replace(/level-\d/, `level-${++clickCount % 3}`);
//});

$('.modal-video').hide();
$('.controll-btn-close').on('click', function() {
    $('.modal-video').fadeOut(500);
});

const videoSection = $('.video-section');

videoSection.hide().first().show();

videoSection.on('click', function() {
    $(this).fadeOut(300);
    $(this).next('.video-section').fadeIn(300);
});

$('.hero__logo').on('click', function() {
    $('.modal-video').fadeIn(500);
    videoSection.hide().first().show();
});
