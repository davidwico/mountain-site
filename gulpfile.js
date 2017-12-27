var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var auto = require('autoprefixer');
var webpack = require('webpack');


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/styles/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/scripts/**/*.js", function(){
        gulp.start('scriptsRefresh');
    });
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

gulp.task('scriptsRefresh', ['scripts'], function(){
    browserSync.reload();
});

gulp.task('scripts', function(callback){
    webpack(require('./webpack.config'), function(err, stats) {
        if(err){
            console.log(err.toString());
        }
        console.log(stats.toString());
        callback();
    });
});

gulp.task('default', ['serve']);