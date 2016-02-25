/*global google*/
import $ from 'jquery';
import initSelectPlugin from '../plugins/select';

const container = $('.map');
const mapSelect = container.find('.map-select');

let map;

initSelectPlugin($);
init();

function init() {
    if (!container.length) return;

    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?signed_in=true';
    script.acync = true;
    script.onload = initMap;
    document.head.appendChild(script);
}

function initMap() {
    map = new google.maps.Map(container.find('#map')[0], {
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

    mapSelect.select({
        selectors: {
            button: '.map-select__current span',
            option: '.map-select__item'
        }
    });

    mapSelect.on('change', (e, obj) => {
        const { lat, lng } = obj;
        function getRandom() {
            return {
                lat: lat + Math.random() / 10,
                lng: lng + Math.random() / 10
            };
        }
        map.setCenter({ lat, lng });
        new google.maps.Marker({
            map,
            position: getRandom(),
            title: 'Blah blah',
            animation: google.maps.Animation.DROP,
            icon: 'icons/tag.svg'
        });
    });

    //map.addListener('zoom_changed', (...props) => {
    //    console.log(props);
    //});

    console.log(map);
}
