'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
sass.compiler = require('node-sass');
gulp.task('sass', function () {
   return gulp.src('./sass/**/*.scss')
   .pipe(concat('style.scss'))
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./css/'));
}); 

gulp.task('sass:watch', function () {
   gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});