const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const gutil = require('gulp-util');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const browserify = require('browserify');
const babelify = require('babelify');
const watchify = require('watchify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const assign = require('lodash.assign');

const customOpts = {
    entries: ['./js/index.js'],
    debug: true
};
const opts = assign({}, watchify.args, customOpts);
const bConfig = watchify(browserify(opts));

gulp.task('sass', () => {
    return gulp
      .src('./sass/style.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(plumber())
      .pipe(autoprefixer({ browsers: ['last 3 versions'] }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./css'));
});

gulp.task('pug', () => {
    return gulp.src('./view/index.pug')
        .pipe(plumber())     
        .pipe(pug())
        .pipe(gulp.dest('./'))
});

function bundle() {
    return bConfig
      .transform(babelify, { presets: ['env'] })
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(plumber())
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./js'));
}

gulp.task('js', bundle);
bConfig.on('update', bundle);
bConfig.on('log', gutil.log);

gulp.task('default', ['sass', 'pug', 'js'], () => {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./view/**/*.pug', ['pug']);
  gulp.watch('./js/**/*.js', ['js']);  
});