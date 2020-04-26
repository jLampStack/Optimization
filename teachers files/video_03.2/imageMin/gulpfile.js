const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('imagemin', () =>
    gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
);

gulp.task('default', ['imagemin']);
