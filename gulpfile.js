var gulp = require('gulp');

var plumber = require('gulp-plumber');
var util = require('gulp-util');
var less = require('gulp-less');
var concat = require('gulp-concat');

var onError = function(err) {
	util.beep();
	console.err(err);
};

gulp.task('styles', function() {
	// Concat to order required wordpress comments/resets first
	// Less doesn't guarantee import orders inside style.less
  gulp.src(['less/wordpress.less', 'less/reset.less', 'less/style.less'])
	.pipe(plumber({
		errorHandler: onError
	}))
	.pipe(less({
		paths: ['less']
	}))
	.pipe(concat('style.css'))
	.pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  gulp.watch('less/**', ['styles']);
});

gulp.task('default', ['watch', 'styles']);

