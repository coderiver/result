var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', [
    'swig:watch',
    'sprite:svg:watch',
    'browserify:watch',
    'sass:watch',
    'svgo:watch'
]);
