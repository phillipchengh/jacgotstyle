var gulp = require('gulp');
var spawn = require('child_process').spawn;

// gulp plugins
var debug = require('gulp-debug');
var plumber = require('gulp-plumber');
var util = require('gulp-util');
var less = require('gulp-less');
var concat = require('gulp-concat');

// Run this function on some error instead of exiting gulp
var onError = function(err) {
	util.beep();
	console.log(err);
};

// Process and concat less files into Wordpress's style.css
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

// Concat js files into jacatucla.js
gulp.task('scripts', function() {
  gulp.src(['js/jacatucla/**/*.js'],
           {base: '.'}) 
  .pipe(plumber({
    errorHandler: onError
  }))
  .pipe(concat('jacatucla.js'))
  .pipe(gulp.dest('js'));
});

// Rerun tasks on file changes
gulp.task('watch', function() {
  gulp.watch('./less/**', ['styles']);
  gulp.watch('./js/**', ['scripts']); 
});

// Assign tasks to default task
gulp.task('default', ['watch', 'styles', 'scripts']);

// Autoreload gulp on gulpfile.js change
// http://noxoc.de/2014/06/25/reload-gulpfile-js-on-change/
gulp.task('auto-reload', function() {
  var process;

  function restart() {
    if (process) {
      process.kill();
    }
    process = spawn('gulp', ['default'], {stdio: 'inherit'});
  }

  gulp.watch('gulpfile.js', restart);
  restart();
});
