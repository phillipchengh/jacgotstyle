var gulp = require('gulp');

var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('styles', function() {
	// Concat to order required wordpress comments/resets first
	// Less doesn't guarantee import orders inside style.less
  gulp.src(['less/wordpress.less', 'less/reset.less', 'less/style.less'])
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

