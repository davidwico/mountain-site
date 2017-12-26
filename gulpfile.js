var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var auto = require('autoprefixer');

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/styles/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('./app/styles/scss/main.scss')
     .pipe(sourcemaps.init())
     .pipe(sass().on('error', sass.logError))
     .pipe(postcss([auto()]))
     .pipe(sourcemaps.write())
     .pipe(gulp.dest('./app/styles/css'))
     .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);