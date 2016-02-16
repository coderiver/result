/*global TimelineMax TweenMax Elastic*/
import $ from 'jquery';
import 'gsap';
import Video from '../classes/video';
import VideoProgressbar from '../classes/video-progressbar';
import dispatcher from '../lib/dispatcher';
import { getScrollDirection, percentage } from '../lib/util';
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

const videoBreakpoints = [24, 52, 81];
const fakeVideoDuration = 123;

const videoTrigger = $('.hero__logo');
const container = $('.modal-video');
const overlay = container.find('.modal-video__overlay');
const videoSections = container.find('.video-section');
const muteBtn = container.find('.controll-btn-volume');
const closeBtn = container.find('.controll-btn-close');

const progressbar = new VideoProgressbar(container.find('.video-timeline'));
const video = window.video = new Video('video', {
    breakpoints: videoBreakpoints,
    fakeDuration: fakeVideoDuration
});

const pbPoints = progressbar.getPoints();

const state = {
    modalActive: false,
    activeBp: null,
    set(prop, value) {
        this[prop] = value;
    },
    get(prop) {
        return this[prop];
    }
};

/**
 * Animations
 */
function changeOverlayVisibility(opacity, duration = 1) {
    return TweenMax.to(overlay, duration, { opacity });
}

function playShowModalVideoAnim() {
    return new Promise((resolve) => {
        new TimelineMax()
            .add(() => {
                container.show();
                changeOverlayVisibility(1, 0);
            })
            .fromTo(container, 1, { autoAlpha: 0 }, { autoAlpha: 1 })
            .addLabel('start')
            .add(changeOverlayVisibility(0.7), 'start')
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
            .add(changeOverlayVisibility(1, 0.3))
            .fromTo(container, 0.5, { autoAlpha: 1 }, { autoAlpha: 0 })
            .add(() => {
                container.hide();
                resolve();
                dispatcher.trigger(MODAL_AFTER_CLOSE);
            });
    });
}

function playOutAnimationForVideoSection(index, duration = 0.3) {
    return new Promise((resolve) => {
        const section = videoSections.eq(index);

        TweenMax.to(section, duration, {
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
                .fromTo(section, 0.5, {
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
                .staggerTo(section.find('.icon-mouse__arrow'), 0.3, {
                    opacity: 0,
                    repeat: 5,
                    yoyo: true
                } , 0.15, '-=0.4');
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

video.on(VIDEO_READY, () => {
    console.info('Video ready');
    progressbar.setupPoints(video.getBreakpoints());
    videoTrigger.on('click', showModalVideo);
    closeBtn.on('click', hideModalVideo);
    muteBtn.on('click', () => {
        muteBtn.toggleClass('is-muted');
        video.toggleSound();
    });
});


/**
 * Main video and progressbar actions
 */

video.on(VIDEO_PROGRESS, (e, progress) => {
    progressbar.setProgress(progress);
});

video.on(VIDEO_BREAKPOINT, (e, bpIndex) => {
    console.info('breakpoint ' + bpIndex);

    const breakPointHandler = bpHandlers[bpIndex];

    changeOverlayVisibility(0.7);
    switchActivePoint(bpIndex);
    switchVideoSection(bpIndex);

    if (typeof breakPointHandler === 'function') {
        breakPointHandler();
    }

    setTimeout(() => {
        video.one('play', () => {
            const bp = state.get('activeBp');
            removeActivePoint();
            changeOverlayVisibility(0);
            hideVideoSection(bp, 1);
        });
    }, 0);
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

function showModalVideo() {
    dispatcher.trigger(MODAL_BEFORE_OPEN);
    playShowModalVideoAnim()
        .then(() => video.goToBreakpoint(0));
}

function hideModalVideo() {
    const bp = state.get('activeBp');

    dispatcher.trigger(MODAL_BEFORE_CLOSE);
    video.pause();

    if (bp !== null) {
        hideVideoSection()
            .then(playHideModalVideoAnim)
            .then(resetVideoBlock);
    } else {
        playHideModalVideoAnim()
            .then(resetVideoBlock);
    }
}

function setActivePoint(index) {
    pbPoints.eq(index).addClass('is-active');
}

function removeActivePoint() {
    pbPoints.filter('.is-active').removeClass('is-active');
}

function switchActivePoint(index) {
    removeActivePoint();
    setActivePoint(index);
}

function resetVideoSectionsStyles() {
    videoSections.each((i, el) => {
        $(el).attr('style', '');
    });
}

function resetVideoBlock() {
    resetVideoSectionsStyles();
    removeActivePoint();
    video.setProgress(0);
    progressbar.setProgress(0);
}

function showVideoSection(index) {
    const animate = playInAnimationForVideoSection[index];
    state.set('activeBp', index);
    if (typeof animate === 'function') {
        return animate();
    }
}

function hideVideoSection(index = state.get('activeBp'), duration) {
    if (index === null) return;
    state.set('activeBp', null);
    return playOutAnimationForVideoSection(index, duration);
}

function switchVideoSection(index) {
    const bpIndex = state.get('activeBp');

    if (bpIndex === null) {
        return showVideoSection(index);
    }

    return hideVideoSection(bpIndex)
        .then(() => showVideoSection(index));
}

const bpHandlers = [
    // bp 1 handler
    () => {
        const win = $(window);

        win.on('wheel', wheelHandler);

        function wheelHandler(e) {
            if (getScrollDirection(e) === 'down') {
                video.play();
                win.off('wheel', wheelHandler);
            }
        }

        dispatcher.one(MODAL_BEFORE_CLOSE, () => {
            win.off('wheel', wheelHandler);
        });
    },

    // bp 2 handler
    () => {
        videoSections.eq(1).find('.step-action-button').one('click', (e) => {
            e.preventDefault();
            video.play();
        });
    },

    // bp 3 handler
    () => {
        const section = videoSections.eq(2);
        const handle = section.find('.step-3__slider');
        const text = section.find('.step-3__right .h5');
        const root = $('body');

        const targetDelta = 300;
        let initPageX = null;
        let currentDelta = 0;

        handle.on('mousedown', onMouseDown);
        handle.on('touchend', () => video.play());

        function onMouseDown(e) {
            initPageX = e.pageX;
            root.addClass('is-dragging');

            setTimeout(() => {
                root.on('mousemove', onMouseMove);
                root.one('mouseup', onMouseUp);
            }, 0);
        }

        function onMouseMove(e) {
            const delta = e.pageX - initPageX;
            if (delta < 0) return;
            const x = delta <= targetDelta ? delta : targetDelta;
            TweenMax.set(handle, { x });
            TweenMax.set(text, { x: x/3, opacity: 1 - percentage(x, targetDelta, 0)/100 });
            currentDelta = x;
        }

        function onMouseUp() {
            let timeout = 0;

            initPageX = null;
            root.removeClass('is-dragging');

            if (currentDelta === targetDelta) {
                video.play();
                currentDelta = 0;
                timeout = 1000;
            }

            setTimeout(() => {
                TweenMax.set([handle, text], { x: 0, opacity: 1, clearProps: 'all' });
            }, timeout);

            setTimeout(() => {
                root.off('mousemove', onMouseMove);
            }, 0);
        }
    },

    // bp 4 handler
    () => {
        videoSections.eq(3).find('.step-action-button').one('click', (e) => {
            e.preventDefault();
            video.play();
        });
    },

    // bp 5 handler
    () => {
        video.play();
    }
];
