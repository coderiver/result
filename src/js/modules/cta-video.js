import $ from 'jquery';
import 'gsap';
import Video from '../classes/video';
import VideoProgressbar from '../classes/video-progressbar';
import {
    VIDEO_READY,
    VIDEO_PROGRESS,
    VIDEO_BREAKPOINT,
    PROGRESSBAR_CLICK,
    PROGRESSBAR_POINT_CLICK
} from '../lib/custom-events';

const videoBreakpoints = [24, 52, 81, 123];

const root = $('body');
const videoTrigger = $('.hero__logo');
const container = $('.modal-video');
const overlay = container.find('.modal-video__overlay')
const videoSections = container.find('.video-section');
const muteBtn = container.find('.controll-btn-volume');
const closeBtn = container.find('.controll-btn-close');

const progressbar = new VideoProgressbar(container.find('.video-timeline'));
const video = window.video = new Video('video', { breakpoints: videoBreakpoints });

const pbPoints = progressbar.getPoints();


/**
 * Animations
 */

const showVideoAnim = new TimelineMax({ paused: true })
    .add(() => {
        container.toggle();
        root.toggleClass('video-active');
    })
    .fromTo(container, 1, { autoAlpha: 0 }, { autoAlpha: 1 })
    .addLabel('start')
    .fromTo(overlay, 1, { opacity: 1 }, { opacity: 0.6 }, 'start')
    .fromTo([muteBtn, closeBtn], 0.1, {
        scale: 2,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        ease: Elastic.easeOut.config(2, 0.3)
    }, 'start+=0.2')
    .fromTo(progressbar.getElement(), 0.3, { y: 100 }, { y: 0 });

const videoSectionsAnim = [
    new TimelineMax({ paused: true })
];


/**
 * Initial actions
 */

videoTrigger.on('click', showVideo);

closeBtn.on('click', hideVideo);

muteBtn.on('click', (e) => {
    muteBtn.toggleClass('is-muted');
    video.toggleSound();
});


/**
 * Main video and progressbar actions
 */

video.on(VIDEO_READY, () => {
    progressbar.setupPoints(video.getBreakpoints());
});

video.on(VIDEO_PROGRESS, (e, progress) => {
    progressbar.setProgress(progress);
});

video.on(VIDEO_BREAKPOINT, (e, bpIndex) => {
    console.log('breakpoint ' + bpIndex);
    setActivePoint(bpIndex);

    video.one('play', removeActivePoint);
});

video.on('volumechange', () => {
    console.log('change volume');
});

progressbar.on(PROGRESSBAR_CLICK, (e, progress) => {
    video.setProgress(progress);
    if (video.getProp('paused')) {
        video.play();
    }
});

progressbar.on(PROGRESSBAR_POINT_CLICK, (e, index, progress) => {
    video.goToBreakpoint(index);
});


/**
 * Functions
 */

function showVideo() {
    showVideoAnim.play();
}

function hideVideo() {
    showVideoAnim.reverse();
    video.pause();
}

function showVideoSectionIntro(index) {
    video.goToBreakpoint(index);
    TweenMax.fromTo(videoSections.eq(index), 1, {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        ease: Power2.easeOut
    });
}

function setActivePoint(index) {
    pbPoints.eq(index).addClass('is-active');
}

function removeActivePoint() {
    pbPoints.filter('.is-active').removeClass('is-active');
}
