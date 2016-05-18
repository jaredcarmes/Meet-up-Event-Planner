var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');

gulp.task('scripts', function() {
	gulp.src('src/js/*.js')
	.pipe(concat('main.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js/'))
});

gulp.task('stylesheets', function() {
	gulp.src('src/css/*.css') 
	.pipe(concat('main.min.css'))
	.pipe(minifyCSS())	    
	.pipe(gulp.dest('dist/css/'))
});

gulp.task('markup', function() {
	gulp.src('src/*.html') 
	.pipe(minifyHTML())	    
	.pipe(gulp.dest('dist'))
});

gulp.task('default', ['scripts', 'stylesheets', 'markup']);