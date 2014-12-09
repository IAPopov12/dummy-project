var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('less', function () {
    gulp.src('./src/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./www/css/'))
});