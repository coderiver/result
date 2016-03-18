/*global google*/
import $ from 'jquery';
import 'svgxuse';
import ps from 'perfect-scrollbar/jquery';

import './modules/menu';

import initSelectPlugin from './plugins/select';
import navColorChange from './plugins/nav-color-change';
const tpl = require('../templates/tpl/shops.nunjucks');

const listContainer    = $('.contacts-list');
const mapContainer     = $('#contacts-map');
const data               = new Map();
const points             = new Map();
let map;
let filtered;

window.$ = window.jQuery = $;

initSelectPlugin($);
ps($);
navColorChange();

$('.select').select();

listContainer.perfectScrollbar({ wheelPropagation: true });

Promise.all([
    loadData('TEST_DATA.json'),
    loadGmapApi()
]).then(results => {

    const [ collection ] = results;

    mapData(collection);
    renderData(collection);
    initGmap();
    setPointsOnGmap(collection);
    bindEvents();
    console.log(data);
    console.log(points);
    filtered = filterIds();
    filterElements();
    filterPoints();

}).catch(err => console.log(err));

function loadData(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url,
            success: resolve,
            error: reject
        });
    });
}

function loadGmapApi() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?signed_in=true';
        script.acync = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function initGmap() {
    map = new google.maps.Map(mapContainer[0], {
        center: { lat: 50.449886, lng: 30.524998 },
        zoom: 10,
        disableDefaultUI: false,
        mapMaker: true,
        mapTypeControl: false,
        overviewMapControl: false,
        panControl: false,
        scrollwheel: false,
        streetViewControl: false
    });

    console.log(map);
}

function mapData(collection) {
    collection.forEach(item => data.set(item.id, item));
}

function setPointsOnGmap(collection) {
    const icon = 'icons/tag.svg';

    collection.forEach(data => {
        const point = new google.maps.Marker({
            map: map,
            position: { lat: +data.lat, lng: +data.lng },
            title: data.name,
            //animation: google.maps.Animation.DROP,
            icon
        });
        points.set(data.id, point);
    });
}

function renderData(data) {
    listContainer.html(tpl.render({ shops: data }));
    listContainer.perfectScrollbar('update');
    return data;
}

function bindEvents() {
    listContainer.find('.contacts-item').on('click', listItemClickHandler);
}

function listItemClickHandler(e) {
    const item = $(e.currentTarget);
    const id = item.data('id');
    const { lat, lng } = data.get(id);

    map.setCenter({ lat: +lat, lng: +lng });
    map.setZoom(10);
}

function filterIds(category, location) {
    const filteredIds = [];

    for (let [key, value] of data) {
        if (+value.open_time.replace(':', '') > 1200) filteredIds.push(key);
    }

    return filteredIds;
}

function filterElements(filteredIds = filtered) {
    listContainer.find('.contacts-item').filter((i, el) => {
        return filteredIds.indexOf($(el).data('id')) === -1;
    }).css('opacity', 0.2);
}

function filterPoints(filteredIds = filtered) {
    points.forEach((point, key) => {
        if (filteredIds.indexOf(key) === -1) {
            point.setOpacity(0.2);
        }
    });
}
