import $ from 'jquery';
import { percentage } from '../lib/util';
import { PROGRESSBAR_CLICK, PROGRESSBAR_POINT_CLICK } from '../lib/actions';

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
    }

    _bindEvents() {
        this.el.on('click', (e) => {
            const progress = this._getProgressByClick(e);
            this.setProgress(progress);
            this.trigger(PROGRESSBAR_CLICK, [progress]);
        });
    }

    _getProgressByClick(clickEvent) {
        const offsetLeft = this.el.offset().left;
        const width = this.el.width();
        const clickX = clickEvent.pageX;
        return percentage((clickX - offsetLeft), width, 2);
    }

    setupPoints(breakPoints) {
        const self = this;

        breakPoints.forEach((val, i) => {
            this.points.eq(i).css({
                left: `${val}%`
            }).attr('data-progress', val);
        });

        this.points.on('click', function(e) {
            const point = $(this);
            const index = point.index();
            const progress = point.data('progress');

            e.stopPropagation();

            self.setProgress(progress);
            self.trigger(PROGRESSBAR_POINT_CLICK, [index, progress]);
        });
    }

    setProgress(progress) {
        if (progress > 100) return;
        this.progressBar.css({
            width: `${progress}%`
        });
    }

    on(...args) {
        this.el.on(...args);
        return this;
    }

    off(...args) {
        this.el.off(...args);
        return this;
    }

    trigger(...args) {
        this.el.trigger(...args);
        return this;
    }

    getElement() {
        return this.el;
    }

    getPoints() {
        return this.points;
    }
}
