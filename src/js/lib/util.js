export const percentage = (
    chunk, from, precision = 2
) => +(chunk / from * 100).toFixed(precision);
