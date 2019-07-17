//===== VARIABLES =====
const gulp = require('gulp');
const browserSync = require("browser-sync").create();
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

//===== TASKS =====
gulp.task('serve', function () {
  browserSync.init({
    server: "app/"
  });
  gulp.watch('app/scss/*.scss', gulp.series('sass'));
  gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src('app/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/'))
    .pipe(browserSync.stream());
});

gulp.task('default', gulp.parallel('serve'));