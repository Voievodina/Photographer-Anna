const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
    return gulp.src('./style/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./style'));
  };

  function watch(cb)
  {
    gulp.watch(['./style/**/*.scss'], css);
    cb(); 
  }

  function prefixer()
  {
    return gulp.src ('./style/**/*.css')
    .pipe (autoprefixer({cascade:false})) 
    .pipe (gulp.dest ('./style'));
  }

exports.makeCSS = css;
exports.watch = watch;
exports.autoprefixer=prefixer;
exports.default = gulp.parallel(css, watch, prefixer);