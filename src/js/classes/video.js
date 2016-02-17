import $ from 'jquery';
import { percentage } from '../lib/util';
import {
    VIDEO_PROGRESS,
    VIDEO_READY,
    VIDEO_BREAKPOINT
} from '../lib/actions';

const defaults = {
    breakpoints: [],
    startBreakpoint: true,
    endBreakpoint: true,
    pauseOnBreakpoint: true,
    fakeDuration: null
};

export default class Video {
    /**
     * Video constructor
     * @param {string} elId - id of html5 video tag
     * @param {object} options
     * {array} options.breakpointsPercent - video breakpointsPercent in seconds
     * {boolean} options.startBreakpoint - use begin of video as breakpoint
     * {boolean} options.endBreakpoint - use end of video as breakpoint
     * {boolean} options.pauseOnBreakpoint - pause playback when reached breakpoint
     * {boolean} options.fakeDuration - fake video duration, will used as endpoint of video
     */
    constructor(elId, options) {
        this.settings = $.extend({}, defaults, options);
        this.video = document.getElementById(elId);
        this.$video = $(this.video);
        this.currentBreakpoint = 0;
        this._bindEvents();
    }

    _bindEvents() {
        const { pauseOnBreakpoint } = this.settings;

        this.video.addEventListener('timeupdate', (e) => {
            const progress = this.getProgress();
            const activeBp = this._whichBpIsActive();

            if (activeBp > this.currentBreakpoint) {
                this.currentBreakpoint = activeBp;
                this.trigger(VIDEO_BREAKPOINT, [activeBp]);
            }

            this.trigger(VIDEO_PROGRESS, [progress]);
        });

        this.video.addEventListener('loadedmetadata', (e) => {
            this._setupBreakpoints();
            this.trigger(VIDEO_READY, [this]);
        });

        if (pauseOnBreakpoint) {
            this.on(VIDEO_BREAKPOINT, () => {
                this.pause();
            });
        }
    }

    _setupBreakpoints() {
        const { breakpoints, startBreakpoint, endBreakpoint, fakeDuration } = this.settings;
        const bpAsPercents =  breakpoints.map(sec => this.getProgress(sec));
        let resPercent = [];
        let resSec = [];

        if (startBreakpoint) {
            resPercent.push(0);
            resSec.push(0);
        }

        resPercent.push(...bpAsPercents);
        resSec.push(...breakpoints);

        if (endBreakpoint) {
            resPercent.push(100);
            resSec.push(fakeDuration || this.video.duration);
        }

        this.breakpointsPercent = resPercent;
        this.breakpointsSec = resSec;
    }

    _whichBpIsActive(time = this.video.currentTime) {
        const { breakpointsSec } = this;
        let i = breakpointsSec.length;

        while (i) {
            if (time >= breakpointsSec[--i] ) {
                return i;
            }
        }

        return 0;
    }

    getBreakpoints() {
        return this.breakpointsPercent;
    }

    on(...args) {
        this.$video.on(...args);
        return this;
    }

    one(...args) {
        this.$video.one(...args);
        return this;
    }

    off(...args) {
        this.$video.off(...args);
        return this;
    }

    trigger(...args) {
        this.$video.trigger(...args);
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
        const { fakeDuration } = this.settings;
        if (time === undefined) {
            time = currentTime;
        }
        return percentage(time, fakeDuration || duration, 2);
    }

    getProp(prop) {
        if (typeof prop === 'string') {
            return this.video[prop];
        }
    }

    setProgress(progress) {
        const { duration } = this.video;
        const { fakeDuration } = this.settings;
        const finalDuration = fakeDuration || duration;
        let newTime;

        if (typeof progress === 'string') { progress = parseFloat(progress, 10); }
        if (progress > 100) { progress = 100; }
        if (progress < 0) { progress = 0; }

        switch (progress) {
            case 0:
                newTime = 0;
                break;
            case 100:
                newTime = finalDuration;
                break;
            default:
                newTime = Math.round((finalDuration / 100 * progress) * 100) / 100;
        }

        this.video.currentTime = newTime;
        this.currentBreakpoint = this._whichBpIsActive();
        return this;
    }

    goToBreakpoint(index) {
        this.currentBreakpoint = index;
        this.setProgress(this.breakpointsPercent[index]);
        this.trigger(VIDEO_BREAKPOINT, [index]);
    }

    toggleSound() {
        this.video.muted = !this.video.muted;
    }
}
