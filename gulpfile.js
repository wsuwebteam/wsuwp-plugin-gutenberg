const gulp = require('gulp');
const { src, series, parellel, dest, watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');


gulp.task('bundleStyle', () => {
    return gulp.src('assets/src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie11'}))
        .pipe(gulp.dest('dist/css/'));
});


gulp.task('watch', () => {
    gulp.watch('assets/src/scss/**/*.scss', (done) => {
        gulp.series(['bundleStyle'])(done);
    });
});



