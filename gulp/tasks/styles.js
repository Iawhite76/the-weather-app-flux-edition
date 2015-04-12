var gulp = require('gulp');
var stylus = require('gulp-stylus');
var connect = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config.js').stylus;
var lost = require('lost-grid');

gulp.task('styles', function() {
  gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(stylus({use: lost()}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload());
});
