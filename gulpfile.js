//載入套件
var gulp = require('gulp');
var sass = require('gulp-sass');


//任務
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss') //來源檔案
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));//目的地檔案
});

gulp.task('watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
