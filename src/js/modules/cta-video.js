/*global TimelineMax TweenMax Power2 Elastic*/
import $ from 'jquery';
import 'gsap';
import Video from '../classes/video';
import VideoProgressbar from '../classes/video-progressbar';
import dispatcher from '../lib/dispatcher';
import {
    VIDEO_READY,
    VIDEO_PROGRESS,
    VIDEO_BREAKPOINT,
    PROGRESSBAR_CLICK,
    PROGRESSBAR_POINT_CLICK,
    MODAL_BEFORE_OPEN,
    MODAL_AFTER_OPEN,
    MODAL_BEFORE_CLOSE,
    MODAL_AFTER_CLOSE
} from '../lib/actions';

const videoBreakpoints = [24, 52, 81, 123];

const root = $('body');
const videoTrigger = $('.hero__logo');
const container = $('.modal-video');
const overlay = container.find('.modal-video__overlay');
const videoSections = container.find('.video-section');
const muteBtn = container.find('.controll-btn-volume');
const closeBtn = container.find('.controll-btn-close');

const progressbar = new VideoProgressbar(container.find('.video-timeline'));
const video = window.video = new Video('video', { breakpoints: videoBreakpoints });

const pbPoints = progressbar.getPoints();

let activeVideoSectionIndex = 0;


/**
 * Animations
 */

function playShowModalVideoAnim() {
    return new Promise((resolve) => {
        new TimelineMax()
            .add(() => {
                container.show();
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
            .fromTo(progressbar.getElement(), 0.3, { y: 100 }, { y: 0 }, 'start+=0.4')
            .add(() => {
                resolve();
                dispatcher.trigger(MODAL_AFTER_OPEN);
            });
    });
}

function playHideModalVideoAnim() {
    return new Promise((resolve) => {
        new TimelineMax()
            .addLabel('start')
            .fromTo(container, 0.5, { autoAlpha: 1 }, { autoAlpha: 0 })
            .fromTo(overlay, 0.5, { opacity: 0.6 }, { opacity: 1 }, 'start')
            .add(() => {
                container.hide();
                resolve();
                dispatcher.trigger(MODAL_AFTER_CLOSE);
            });
    });
}

function playOutAnimationForVideoSection(index) {
    return new Promise((resolve) => {
        const section = videoSections.eq(index);

        TweenMax.to(section, 0.5, {
            autoAlpha: 0,
            scale: 2,
            clearProps: 'all',
            onComplete: resolve
        });
    });
}

const playInAnimationForVideoSection = [
    // video section 1
    () => {
        return new Promise((resolve) => {
            const section = videoSections.eq(0);

            new TimelineMax()
                .fromTo(section, 1, {
                    autoAlpha: 0,
                    scale: 5
                }, {
                    autoAlpha: 1,
                    scale: 1
                })
                .fromTo(section.find('p'), 0.5, {
                    opacity: 0,
                    y: 100
                }, {
                    opacity: 1,
                    y: 0
                })
                .fromTo(section.find('.icon-mouse'), 0.8, {
                    opacity: 0,
                    y: 100
                }, {
                    opacity: 1,
                    y: 0,
                    ease: Elastic.easeOut.config(1, 0.5)
                })
                .add(resolve)
                .staggerTo(section.find('.icon-mouse__arrow'), 0.2, {
                    opacity: 0,
                    repeat: 3,
                    yoyo: true
                } , 0.1, '-=0.4');
        });
    },

    // video section 2
    () => {
        return new Promise((resolve) => {
            const section = videoSections.eq(1);
            const figures = section.find('.step-figure');
            const firstFigure = figures.first();
            const notFirstFugures = figures.not(':first');
            const radioSinal = firstFigure.find('.icon-radio__signal');

            const signalAnim = new TimelineMax({ repeat: 10 })
                .staggerFromTo(radioSinal, 0.1, {
                    opacity: 0
                }, {
                    opacity: 1,
                    repeat: 1,
                    yoyo: true
                }, 0.2)
                .set(radioSinal, { opacity: 1 });

            new TimelineMax()
                .set(section, { autoAlpha: 1 })
                .fromTo(section.find('.step-r-logo'), 0.5, {
                    autoAlpha: 0,
                    scale: 7
                }, {
                    autoAlpha: 1,
                    scale: 1
                })
                .fromTo(section.find('.h4'), 0.5, {
                    opacity: 0,
                    y: 30
                }, {
                    opacity: 1,
                    y: 0
                }, '-=0.2')
                .staggerFromTo([
                    notFirstFugures.find('.icon'),
                    notFirstFugures.find('.h5')
                ], 0.5, {
                    opacity: 0,
                    y: 20
                }, {
                    opacity: 1,
                    y: 0,
                    ease: Elastic.easeOut.config(1.2, 0.5)
                }, 0.1)
                .fromTo(firstFigure, 0.5, {
                    opacity: 0,
                    scale: 2
                }, {
                    opacity: 1,
                    scale: 1,
                    ease: Elastic.easeOut.config(1, 0.75)
                }, '-=0.2')
                .staggerFromTo([
                    firstFigure.find('.icon'),
                    firstFigure.find('.h5')
                ], 0.5, {
                    opacity: 0,
                    y: 20
                }, {
                    opacity: 1,
                    y: 0,
                    ease: Elastic.easeOut.config(1.2, 0.5)
                }, 0.1)
                .add(resolve)
                .add(signalAnim);
        });
    },

    // video section 3
    () => {
        return new Promise((resolve) => {
            const section = videoSections.eq(2);

            new TimelineMax()
                .set(section, { autoAlpha: 1 })
                .fromTo(section.find('.step-r-logo'), 0.5, {
                    autoAlpha: 0,
                    scale: 7
                }, {
                    autoAlpha: 1,
                    scale: 1
                })
                .staggerFromTo([
                    section.find('.h4'),
                    section.find('.h5')
                ], 0.5, {
                    opacity: 0,
                    y: 20
                }, {
                    opacity: 1,
                    y: 0,
                    ease: Elastic.easeOut.config(1.2, 0.5)
                }, 0.1)
                .fromTo(section.find('.step-3__circle'), 0.5, {
                    opacity: 0,
                    scale: 2
                }, {
                    opacity: 1,
                    scale: 1,
                    ease: Elastic.easeOut.config(1, 0.75)
                })
                .fromTo(section.find('.step-3__slider'), 0.2, {
                    opacity: 0
                }, {
                    opacity: 1
                })
                .add(resolve);
        });
    },

    // video section 4
    () => {
        return new Promise((resolve) => {
            const section = videoSections.eq(3);
            const figures = section.find('.step-figure');
            const lastFigure = figures.last();
            const notLastFigures = figures.not(':last');

            new TimelineMax()
                .set(section, { autoAlpha: 1 })
                .fromTo(section.find('.step-r-logo'), 0.5, {
                    autoAlpha: 0,
                    scale: 7
                }, {
                    autoAlpha: 1,
                    scale: 1
                })
                .fromTo(section.find('.h4'), 0.5, {
                    opacity: 0,
                    y: 30
                }, {
                    opacity: 1,
                    y: 0
                }, '-=0.2')
                .staggerFromTo([
                    notLastFigures.find('.icon'),
                    notLastFigures.find('.h5')
                ], 0.5, {
                    opacity: 0,
                    y: 20
                }, {
                    opacity: 1,
                    y: 0,
                    ease: Elastic.easeOut.config(1.2, 0.5)
                }, 0.1)
                .fromTo(lastFigure, 0.5, {
                    opacity: 0,
                    scale: 2
                }, {
                    opacity: 1,
                    scale: 1,
                    ease: Elastic.easeOut.config(1, 0.75)
                }, '-=0.2')
                .staggerFromTo([
                    lastFigure.find('.icon'),
                    lastFigure.find('.h5')
                ], 0.5, {
                    opacity: 0,
                    y: 20
                }, {
                    opacity: 1,
                    y: 0,
                    ease: Elastic.easeOut.config(1.2, 0.5)
                }, 0.1)
                .add(resolve);
        });
    },

    // video section 5
    () => {
        return new Promise((resolve) => {
            const section = videoSections.eq(4);
            const figures = section.find('.step-figure');
            const lastFigure = figures.last();
            const notLastFigures = figures.not(':last');

            new TimelineMax()
                .set(section, { autoAlpha: 1 })
                .fromTo(section.find('.step-r-logo'), 0.5, {
                    autoAlpha: 0,
                    scale: 7
                }, {
                    autoAlpha: 1,
                    scale: 1
                })
                .fromTo(section.find('.h4'), 0.5, {
                    opacity: 0,
                    y: 30
                }, {
                    opacity: 1,
                    y: 0
                }, '-=0.2')
                .staggerFromTo([
                    notLastFigures.find('.icon'),
                    notLastFigures.find('.h5')
                ], 0.5, {
                    opacity: 0,
                    y: 20
                }, {
                    opacity: 1,
                    y: 0,
                    ease: Elastic.easeOut.config(1.2, 0.5)
                }, 0.1)
                .fromTo(lastFigure, 0.5, {
                    opacity: 0,
                    scale: 2
                }, {
                    opacity: 1,
                    scale: 1,
                    ease: Elastic.easeOut.config(1, 0.75)
                }, '-=0.2')
                .staggerFromTo([
                    lastFigure.find('.icon-squares'),
                    lastFigure.find('.h5')
                ], 0.5, {
                    opacity: 0,
                    y: 20
                }, {
                    opacity: 1,
                    y: 0,
                    ease: Elastic.easeOut.config(1.2, 0.5)
                }, 0.1)
                .add(resolve);
        });
    }
];


/**
 * Initial actions
 */

videoTrigger.on('click', showModalVideo);

closeBtn.on('click', hideModalVideo);

muteBtn.on('click', () => {
    muteBtn.toggleClass('is-muted');
    video.toggleSound();
});


/**
 * Main video and progressbar actions
 */

video.on(VIDEO_READY, () => {
    progressbar.setupPoints(video.getBreakpoints());
    video.goToBreakpoint(0);
});

video.on(VIDEO_PROGRESS, (e, progress) => {
    progressbar.setProgress(progress);
});

video.on(VIDEO_BREAKPOINT, (e, bpIndex) => {
    console.log('breakpoint ' + bpIndex);
    removeActivePoint();
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

progressbar.on(PROGRESSBAR_POINT_CLICK, switchVideoSection);


/**
 * Functions
 */

function showModalVideo() {
    dispatcher.trigger(MODAL_BEFORE_OPEN);
    playShowModalVideoAnim()
        .then(playInAnimationForVideoSection[0])
        .then(() => console.log('done'));
}

function hideModalVideo() {
    dispatcher.trigger(MODAL_BEFORE_CLOSE);
    video.pause();
    playOutAnimationForVideoSection(activeVideoSectionIndex)
        .then(playHideModalVideoAnim)
        .then(resetVideoSectionsStyles);
}

function setActivePoint(index) {
    pbPoints.eq(index).addClass('is-active');
}

function removeActivePoint() {
    pbPoints.filter('.is-active').removeClass('is-active');
}

function resetVideoSectionsStyles() {
    videoSections.each((i, el) => {
        $(el).attr('style', '');
    });
}

function switchVideoSection(e, index, progress) {
    video.goToBreakpoint(index);
    playOutAnimationForVideoSection(activeVideoSectionIndex)
        .then(playInAnimationForVideoSection[index])
        .then(() => {
            activeVideoSectionIndex = index;
        });
}
