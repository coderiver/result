import $ from 'jquery';
import {
    VIDEO_PROGRESS,
    VIDEO_READY,
    VIDEO_BREAKPOINT
} from '../lib/custom-events';

const defaults = {
    breakpoints: [],
    pauseOnBreakpoint: true
};

export default class Video {
    /**
     * Video constructor
     * @param elId [string] id of html5 video tag
     * @param options [object]
     * options.breakpoints [array] video breakpoints in seconds
     */
    constructor(elId, options) {
        this.video = document.getElementById(elId);
        this.$video = $(this.video);
        this.settings = $.extend({}, defaults, options);
        this.currentBreakpoint = 0;
        this._bindEvents();
        console.log(this);
    }

    _bindEvents() {
        const { breakpoints, pauseOnBreakpoint } = this.settings;

        this.video.addEventListener('timeupdate', (e) => {
            const progress = this.getProgress();
            const time = this.video.currentTime;
            const activeBp = this._whichBpIsActive(time);

            if (activeBp > this.currentBreakpoint) {
                this.currentBreakpoint = activeBp;
                if (pauseOnBreakpoint) { this.pause(); }
                this.$video.trigger(VIDEO_BREAKPOINT, [activeBp]);
            }

            this.$video.trigger(VIDEO_PROGRESS, [progress]);
        });

        this.video.addEventListener('loadedmetadata', (e) => {
            this.percentBreakpoints = this._getBpAsPercents(breakpoints);
            this.$video.trigger(VIDEO_READY, [this]);
        });
    }

    _getBpAsPercents(breakpointsInSec) {
        return breakpointsInSec.map(sec => this.getProgress(sec));
    }

    _whichBpIsActive(time = this.video.currentTime) {
        const { breakpoints } = this.settings;
        let i = breakpoints.length;

        while (i) {
            if (time >= breakpoints[i - 1] ) {
                return i;
            }
            i--;
        }

        return 0;
    }

    getBreakpoints() {
        return this.percentBreakpoints;
    }

    on() {
        this.$video.on.apply(this.$video, arguments);
        return this;
    }

    off() {
        this.$video.off.apply(this.$video, arguments);
        return this;
    }

    play() {
        this.video.play();
        return this;
    }

    pause() {
        this.video.pause();
        return this;
    }

    getProgress(time) {
        const { duration, currentTime} = this.video;
        if (time === undefined) {
            time = currentTime;
        }
        return Math.ceil((time * 100 / duration) * 100 ) / 100;
    }

    getProp(prop) {
        if (typeof prop !== 'string') { return; }
        return this.video[prop];
    }

    setProgress(progress) {
        if (typeof progress === 'string') {
            progress = parseFloat(progress, 10);
        }
        if (progress > 100) { progress = 100; }
        if (progress < 0) { progress = 0; }
        console.log('progress ' + progress);
        const { duration } = this.video;
        this.video.currentTime = duration / 100 * progress;
        this.currentBreakpoint = this._whichBpIsActive();
        return this;
    }

    toggleSound() {
        this.video.muted = !this.video.muted;
    }
}
