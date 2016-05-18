var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');

gulp.task('scripts', function() {
	gulp.src('js/*.js')
	.pipe(concat('main.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist'))
});

gulp.task('stylesheets', function() {
	gulp.src('css/*.css') 
	    .pipe(minify("style.min.css"))	    
	    .pipe(gulp.dest('dist'))
});