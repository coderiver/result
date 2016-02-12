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
