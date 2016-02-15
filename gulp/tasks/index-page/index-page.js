'use strict';
const gulp        = require('gulp');
const consolidate = require('gulp-consolidate');
const fs          = require('fs');
const path        = require('path');
const config      = require('../../config');
const allowExt    = ['.html', '.jade'];

gulp.task('index-page', function(cb) {
    const fullList = fs.readdirSync(config.src.templates);
    const pages = fullList.reduce((acc, val) => {
        const parsed = path.parse(val);
        const name = parsed.name;
        const ext = parsed.ext;
        if (~allowExt.indexOf(ext)) {
            return acc.concat(`${name}.html`);
        }
        return acc;
    }, []);

    return gulp
        .src(`${__dirname}/__index.html`)
        .pipe(consolidate('lodash', {
            pages: pages
        }))
        .pipe(gulp.dest(config.src.root));
});
