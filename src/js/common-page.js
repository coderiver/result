import $ from 'jquery';
import './modules/menu';
import initSelectPlugin from './plugins/select';
import 'svgxuse';

initSelectPlugin($);

$('.select').select();
