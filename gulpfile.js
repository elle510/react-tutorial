'use strict';

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

var del = require('del');

gulp.task('clean', function() {
    return del('build/*.js');
});

gulp.task('build', ['clean'], function() {
	return gulp.src('./src/app.js')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest('build/'));
});

gulp.task('default', ['build']);