import $ from 'jquery';
import { PROGRESSBAR_CLICK } from '../lib/custom-events';

const defaults = {
    barSel: '.video-timeline__progress-bar',
    pointSel: '.video-timeline__point'
};

export default class VideoProgressbar {
    constructor(el, options) {
        this.settings = $.extend({}, defaults, options);
        this.el = (el instanceof $) ? el : $(el);
        this.progressBar = this.el.find(this.settings.barSel);
        this.points = this.el.find(this.settings.pointSel);

        this._bindEvents();
        console.log(this);
    }

    _bindEvents() {
        this.el.on('click', (e) => {
            const progress = this._getProgressByClick(e);
            this.el.trigger(PROGRESSBAR_CLICK, [progress]);
            this.setProgress(progress);
        });
    }

    _getProgressByClick(clickEvent) {
        const offsetLeft = this.el.offset().left;
        const width = this.el.width();
        const clickX = clickEvent.pageX;
        return (
            Math.round(((clickX - offsetLeft) * 100 / width) * 100) / 100
        );
    }

    setupPoints(points) {
        points.forEach((val, i) => {
            this.points.eq(i + 1).css({
                left: `${val}%`
            });
        });
    }

    setProgress(progress, noTransition) {
        this.progressBar.css({
            width: `${progress}%`
        });
    }

    on() {
        this.el.on.apply(this.el, arguments);
        return this;
    }

    off() {
        this.el.off.apply(this.el, arguments);
        return this;
    }

    getElement() {
        return this.el;
    }
}
