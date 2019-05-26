var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');

gulp.task('css', function () {
  gulp
    .src('css/*.css')
    .pipe(
      uglifycss({
        uglyComments : true,
      }),
    )
    .pipe(gulp.dest('./dist/'));
});
