import $ from 'jquery';

import './modules/menu';

let clickCount = 0;

$('.controll-btn-volume').on('click', function(e) {
    let className = this.className;
    this.className = className.replace(/level-\d/, `level-${++clickCount % 3}`);
});

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

$('.select__button').each((index, button) => {
    let btn = $(button);
    btn.on('click', (e) => {
        btn.parent().toggleClass('is-active');
    });
});
