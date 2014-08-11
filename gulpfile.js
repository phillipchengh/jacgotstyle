var gulp = require('gulp');

var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('styles', function() {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  gulp.watch('less/**', ['styles']);
});

gulp.task('default', ['watch', 'styles']);

