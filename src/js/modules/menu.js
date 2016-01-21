import $ from 'jquery';

const $menu       = $('.menu');
const $panel      = $menu.find('.menu__panel');
const $menuButton = $menu.find('.menu-button');
const $body       = $('body');

const classes = {
    menuOpen: 'menu-open',
    active: 'is-active',
    animate: 'is-animate',
    ready: 'is-ready'
};

let opened = false;
let timeout;

/**
 * dur + n * delay Duration of open menu animation
 * dur - tile animation diration
 * n - count of tiles - 1
 * delay - deley for animation for next tile
 */
const openAnimationDuration = 400 + 11 * 20;

$panel.on('click', toggleMenu);


function toggleMenu() {
    $body.toggleClass(classes.menuOpen);
    $menuButton.toggleClass(classes.active);
    clearTimeout(timeout);

    if (opened) {
        $menu.removeClass(classes.ready).removeClass(classes.animate);
        opened = false;
        timeout = setTimeout(() => {
            $menu.removeClass(classes.active);
        }, openAnimationDuration);
        return;
    }

    $menu.addClass(classes.active).addClass(classes.animate);
    timeout = setTimeout(() => {
        $menu.addClass(classes.ready);
    }, openAnimationDuration);
    opened = true;
}
