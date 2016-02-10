var gulp        = require('gulp');
var runSequence = require('run-sequence');
var config      = require('../config');

function build(cb, prod) {
    if (prod) config.production = true;
    runSequence(
        'clean',
        'sprite:svg',
        'svgo',
        'sass',
        'nunjucks',
        'webpack',
        'copy',
        cb
    );
}

gulp.task('build', function(cb) {
    build(cb, true);
});

gulp.task('build:dev', function(cb) {
    build(cb);
});
