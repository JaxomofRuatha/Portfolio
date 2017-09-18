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

gulp.task('watch', () => {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./view/**/*.pug', ['pug']);
});

gulp.task('pug', () => {
    return gulp.src('./view/index.pug')
        .pipe(plumber())     
        .pipe(pug())
        .pipe(gulp.dest('./'))
});