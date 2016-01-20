var gulp        = require('gulp');
var runSequence = require('run-sequence');
var config      = require('../config');

function build(prod) {
    if (prod) config.production = true;
    runSequence(
        'clean',
        'sprite:svg',
        'svgo',
        'sass',
        'swig',
        'browserify',
        'copy'
    );
}

gulp.task('build', function(cb) {
    build(true);
    cb();
});

gulp.task('build:dev', function(cb) {
    build();
    cb();
});
