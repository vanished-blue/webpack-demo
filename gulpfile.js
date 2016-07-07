let gulp = require('gulp');
let webpack = require('gulp-webpack');

gulp.task('webpack', () => {
  return gulp.src('entry.js')
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest('.'))
});


gulp.task('default', ['webpack']);
