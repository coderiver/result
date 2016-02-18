import $ from 'jquery';
import 'svgxuse';

import './modules/menu';
import './modules/calculator';

import initSelectPlugin from './plugins/select';

initSelectPlugin($);

$('.select').select();
