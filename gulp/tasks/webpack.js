var gulp          = require('gulp');
var webpack       = require('webpack');
var gutil         = require('gulp-util');
var server        = require('./server');
var config        = require('../config');
var webpackConfig = require('../../webpack.config');

var compiler = webpack(webpackConfig);

function handler(err, stats, cb) {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
        colors: true,
        chunks: false
    }));
    server.reload();
    if (typeof cb === 'function') cb();
}

gulp.task('webpack', function(cb) {
    compiler.run(function(err, stats) {
        handler(err, stats, cb);
    });
});

gulp.task('webpack:watch', function() {
    compiler.watch({
        aggregateTimeout: 100,
        poll: false
    }, handler);
});
