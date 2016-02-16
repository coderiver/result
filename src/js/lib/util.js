export function percentage(chunk, from, precision = 2) {
    return +(chunk / from * 100).toFixed(precision);
}

export function getScrollDirection(wheelEvent) {
    const e = wheelEvent.originalEvent || wheelEvent;
    const deltaY = e.deltaY;
    const direction = (deltaY < 0) ? 'up' : 'down';
    return direction;
}
