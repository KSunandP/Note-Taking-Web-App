"use strict"

let gulp = require('gulp'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    uglifycss = require('gulp-uglifycss'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch');

gulp.task('default', function () { console.log('Default Task') });

gulp.task('styles', function(){
    return gulp.src('./styles/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('styles.css'))
    .pipe(uglifycss({"max-line-len":100}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'));
});

gulp.watch('./styles/**/*.less', ['styles']);
