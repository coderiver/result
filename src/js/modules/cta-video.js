import $ from 'jquery';
import Video from '../classes/video';
import VideoProgressbar from '../classes/video-progressbar';
import {
    VIDEO_READY,
    VIDEO_PROGRESS,
    VIDEO_BREAKPOINT,
    PROGRESSBAR_CLICK
} from '../lib/custom-events';

const videoBreakpoints = [24, 52, 81, 123];
const container = $('.modal-video');
const muteBtn = $('.controll-btn-volume');

const progressbar = new VideoProgressbar(container.find('.video-timeline'));
const video = window.video = new Video('video', { breakpoints: videoBreakpoints });


video.on(VIDEO_READY, () => {
    progressbar.setupPoints(video.getBreakpoints());
}).on(VIDEO_PROGRESS, (e, progress) => {
    progressbar.setProgress(progress);
}).on(VIDEO_BREAKPOINT, (e, bpIndex) => {
    console.log('breakpoint ' + bpIndex);
});

video.on('volumechange', () => {
    console.log('change volume');
});

progressbar.on(PROGRESSBAR_CLICK, (e, progress) => {
    video.setProgress(progress);
    if (video.getProp('paused')) { video.play(); }
});

muteBtn.on('click', (e) => {
    muteBtn.toggleClass('is-muted');
    video.toggleSound();
});

$('.hero__logo').on('click', () => {
    setTimeout(() => video.play(), 500);
});

$('.controll-btn-close').on('click', () => {
    video.pause();
});
