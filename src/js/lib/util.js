export function percentage(chunk, from, precision = 2) {
    return +(chunk / from * 100).toFixed(precision);
}

export function getScrollDirection(wheelEvent) {
    const e = wheelEvent.originalEvent || wheelEvent;
    const deltaY = e.deltaY;
    const direction = (deltaY < 0) ? 'up' : 'down';
    return direction;
}

const scroll = (() => {
    const root = document;
    const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
    const events = ['wheel', 'keydown'];
    let isDisabled = false;

    function prevent(e) {
        switch (e.type) {
            case 'keydown':
                if (keys.indexOf(e.which) === -1) return true;
                e.preventDefault();
                return false;

            case 'wheel':
            default:
                e.preventDefault();
                return false;
        }
    }

    return {
        disableScroll() {
            if (isDisabled) return;
            events.forEach(evt => root.addEventListener(evt, prevent));
            isDisabled = true;
        },
        enableScroll() {
            if (!isDisabled) return;
            events.forEach(evt => root.removeEventListener(evt, prevent));
            isDisabled = false;
        }
    };
})();

export const { disableScroll, enableScroll } = scroll;
