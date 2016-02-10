import $ from 'jquery';
import 'slick-carousel';
import 'gsap';
import debounce from 'lodash/debounce';

function createSingleTile() {
    return $(
        `<div class="gs-tile">
            <div class="gs-tile-inner">
                <div class="gs-tile-img"></div>
            </div>
            <div class="gs-tile-inner">
                <div class="gs-tile-img"></div>
            </div>
        </div>`
    );
}

function createTiles(count) {
    let tiles = $([]);
    while(count) {
        tiles = tiles.add(createSingleTile(count));
        count--;
    }
    return tiles;
}

function getBgUrlString(obj) {
    let node = (obj instanceof $) ? obj[0] : obj;
    return node.style.backgroundImage;
}

class Gallery {
    constructor(el, options) {
        this.el = (el instanceof $) ? el : $(el);
        this.settings = $.extend(true, {}, Gallery.defaults, options);

        this._initSlickGallery();
        this._bindEvents();
        this._createTiles();
        this._updateTilesStyles();
        console.log(this);
    }

    slickApiCall(...args) {
        return this.el.slick.apply(this.el, args);
    }

    _initSlickGallery() {
        const { arrows, autoplay, speed, dots, autoplaySpeed } = this.settings;

        this.el.slick({
            adaptiveHeight: false,
            fade: true,
            pauseOnHover: false,
            speed,
            arrows,
            dots,
            autoplay,
            autoplaySpeed
        });
    }

    _bindEvents() {
        $(window).on('resize', debounce(this._updateTilesStyles.bind(this), 500));

        this.el.on('beforeChange', (e, slick, currentSlideIndex, nextSlideIndex) => {
            this._slide(
                slick.$slides.eq(currentSlideIndex),
                slick.$slides.eq(nextSlideIndex)
            );
        });
    }

    _createTiles() {
        const { tileCount } = this.settings;

        this.tiles = createTiles(tileCount);
        this.tilesContainer = $('<div class="gs-container"></div>').appendTo(this.el);

        this.tiles.css({
            width: `${(100 / tileCount)}%`
        });

        this.tilesContainer.append(this.tiles);

        const tilesInner = this.tilesContainer.find('.gs-tile-inner');

        this.firstTiles = tilesInner.filter(':first-child');
        this.secondTiles = tilesInner.filter(':last-child');
        this.currentImages = this.firstTiles.find('.gs-tile-img');
        this.nextImages = this.secondTiles.find('.gs-tile-img');

        TweenMax.set(this.secondTiles, { xPercent: -100 });
    }

    _updateTilesStyles() {
        const { tileCount } = this.settings;
        const slide = this.el.slick('getSlick').$slides.first();
        const slideWidth = slide.width();
        const slideHeight = slide.height();

        this.currentImages.add(this.nextImages).css({
            width: slideWidth,
            height: slideHeight
        });

        for (let i = tileCount; i >= 0; i--) {
            let pos = (-i * slideWidth / tileCount).toFixed(1);

            this.currentImages.eq(i).css({
                left: `${pos}px`
            });

            this.nextImages.eq(i).css({
                left: `${pos}px`
            });
        }
    }

    _setBackgrounds(currentSlide, nextSlide) {
        if (!currentSlide && !nextSlide) return;

        this.currentImages.css({
            backgroundImage: getBgUrlString(currentSlide)
        });

        this.nextImages.css({
            backgroundImage: getBgUrlString(nextSlide)
        });
    }

    _slide(currentSlide, nextSlide) {
        const duration = this.settings.speed / 1000;
        const timeline = new TimelineMax();
        const ease = Power2.easeInOut;

        this._setBackgrounds(currentSlide, nextSlide);

        timeline
            .set(this.tilesContainer, {
                opacity: 1
            })
            .addLabel('animation-start')
            .add([
                TweenMax.fromTo(this.currentImages.filter(':even'), duration + 0.3, {
                    x: 0
                }, {
                    x: -100,
                    ease
                }),
                TweenMax.fromTo(this.currentImages.filter(':odd'), duration + 0.3, {
                    x: 0
                }, {
                    x: 100,
                    ease
                })
            ], 'animation-start')
            .fromTo(this.secondTiles, duration, {
                xPercent: -100
            }, {
                xPercent: 0,
                ease
            }, 'animation-start+=0.3')
            .add([
                TweenMax.fromTo(this.nextImages.filter(':even'), duration, {
                    x: 100
                }, {
                    x: 0,
                    ease
                }),
                TweenMax.fromTo(this.nextImages.filter(':odd'), duration, {
                    x: -100
                }, {
                    x: 0,
                    ease
                })
            ], 'animation-start+=0.3')
            .set(this.tilesContainer, {
                opacity: 0
            });
    }
}

Gallery.defaults = {
    tileCount: 6,
    speed: 1000,
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 5000
};

module.exports = Gallery;


