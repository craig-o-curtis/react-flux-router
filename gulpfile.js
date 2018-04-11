"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // Runs local dev server
var open = require('gulp-open'); // Opens URL in web browser

var config = {
	port: '9005',
	devBaseUrl: 'http://localhost',
	paths: {
		html:  './src/*.html',
		dist: './dist'
	}
};

// Start a local dev server
gulp.task('connect', function () {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true 
	});
});

// Opens file to dev server
gulp.task('open', ['connect'], function() {
	 gulp.src('dist/index.html')
	 	.pipe(open({url: config.devBaseUrl + ':' + config.port + '/'}));
});

// Moves html from src to dist
gulp.task('html', function() {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']);
});


// Default task run with 'gulp'
gulp.task('default', ['html', 'open', 'watch']);
