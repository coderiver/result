var gulp        = require('gulp');
var browserSync = require('browser-sync').create('dev-server');
var util        = require('gulp-util');
var config      = require('../config');

// in CL 'gulp server --open' to open current project in browser
// in CL 'gulp server --tunnel siteName' to make project available over http://siteName.localtunnel.me

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: !config.production ? [config.dest.root, config.src.root] : config.dest.root,
            directory: false
        },
        files: [
            config.dest.html + '/*.html',
            config.dest.css + '/*.css',
            config.dest.img + '/**/*'
        ],
        port: util.env.port || 8080,
        logLevel: 'info', // 'debug', 'info', 'silent', 'warn'
        logConnections: false,
        logFileChanges: true,
        open: Boolean(util.env.open),
        notify: false,
        ghostMode: false,
        online: Boolean(util.env.tunnel),
        tunnel: util.env.tunnel || null
    });
});
