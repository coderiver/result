/**
 * Change color of logotype, menu button,
 * language links and top links when scroll
 */

import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import debounce from 'lodash/debounce';

// selectors for sections on page that may trigger changes of color
const sections = ['.hero-group', '.footer', '.toparea'];
const root = $('body');

const createController = () => new ScrollMagic.Controller({ container: 'body' });

export default function navColorChange(controller = createController()) {
    sections.forEach(selector => {

        const section = $(selector);
        if (!section.length) return;

        const duration = section.outerHeight();

        // top line
        const scene1 = new ScrollMagic.Scene({
            triggerHook: 'onLeave',
            triggerElement: section[0],
            offset: -40,
            duration: duration
        }).on('enter leave', () => {

            root.toggleClass('top-line-cc');

        }).addTo(controller);

        // middle line
        const scene2 = new ScrollMagic.Scene({
            triggerHook: 'onCenter',
            triggerElement: section[0],
            duration
        }).on('enter leave', () => {

            root.toggleClass('middle-line-cc');

        }).addTo(controller);

        $(window).on('resize', debounce(() => {
            const duration = section.outerHeight();
            scene1.duration(duration);
            scene2.duration(duration);
        }, 200));

    });
}
