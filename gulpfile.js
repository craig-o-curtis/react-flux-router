"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // Runs local dev server
var open = require('gulp-open'); // Opens URL in web browser
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify'); // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); // Concatenates files
var lint = require('gulp-eslint'); // Linter for JSX and JS

var config = {
	port: '9005',
	devBaseUrl: 'http://localhost',
	paths: {
		html:  './src/*.html',
		js: './src/**/*.js',
		css: [
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.css'
    ],
    images: './src/images/*',
		dist: './dist',
		mainJs: './src/main.js'
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

// 
gulp.task('js', function() {
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console) )
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

// 
gulp.task('css', function() {
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'))
});

// images task
gulp.task('images', function(){
  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + '/images'))
    .pipe(connect.reload());
  // publish favicon
  gulp.src('./src/favicon.ico')
    .pipe(gulp.dest(config.paths.dist));
});

// ES Lint
gulp.task('lint', function() {
	return gulp.src(config.paths.js)
		.pipe(lint({
			config: 'eslint.config.json'
		}))
		.pipe(lint.format());
});

gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js', 'lint']);
});

// Default task run with 'gulp'
gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);
