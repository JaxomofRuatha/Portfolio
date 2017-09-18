const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');

gulp.task('sass', () => {
    return gulp.src('./sass/*.scss')
        .pipe(plumber())    
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', () => {
    gulp.watch('./sass/*.scss', ['sass']);
});

//Compile Pug into index.html

gulp.task('pug', () => {
    return gulp.src('./view/**/*.pug')
        .pipe(pug().on('error', pug.logError))
        .pipe(gulp.dest('./index.html'))
});