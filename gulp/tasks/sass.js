var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker     = require('css-mqpacker');
var config       = require('../config');

var processors = [
    autoprefixer({
        browsers: ['last 4 versions'],
        cascade: false
    }),
    mqpacker({
        sort: function(a, b) {
            A = a.replace(/\D/g, '');
            B = b.replace(/\D/g, '');
            return B - A;
            // replace this with a-b for Mobile First approach
        }
    })
];

gulp.task('sass', function() {
    return gulp
        .src(config.src.sass + '/*.{sass,scss}')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: config.production ? 'compact' : 'expanded', // nested, expanded, compact, compressed
            precision: 5
        }))
        .on('error', config.errorHandler)
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.dest.css));
});

gulp.task('sass:watch', function() {
    gulp.watch(config.src.sass + '/**/*.{sass,scss}', ['sass']);
});
