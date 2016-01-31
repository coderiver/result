var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', [
    'nunjucks:watch',
    'sprite:svg:watch',
    'svgo:watch',
    'webpack:watch',
    'sass:watch'
]);
