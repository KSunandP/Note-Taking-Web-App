"use strict"

let gulp = require('gulp'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    uglifycss = require('gulp-uglifycss'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    babel = require('gulp-babel');

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

gulp.task('scripts', function(){
    return gulp.src('./js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(babel({presets:['es2015']}))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/js'));
});

gulp.watch('./styles/**/*.less', ['styles']);
gulp.watch('.js/**/*.js', ['scripts']);
