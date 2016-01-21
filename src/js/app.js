import $ from 'jquery';

import './modules/menu';

let clickCount = 0;

$('.controll-btn-volume').on('click', function(e) {
    let className = this.className;
    this.className = className.replace(/level-\d/, `level-${++clickCount % 3}`);
});

$('.controll-btn-close').on('click', function() {
    $('.modal-video').fadeOut(500);
});
