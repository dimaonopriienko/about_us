var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload');

//server connect

gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    });
});
//scss
gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(connect.reload());
});

/*
//html
gulp.task('html', function () {
    gulp.src('index.html')
        .pipe(connect.reload());
});
*/


gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
    //gulp.watch('index.html', ['html']);
});

//default

gulp.task('default', ['connect','sass','watch']);