const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

exports.compileSass = function (done) {
    gulp.src('./scr/sass/*.scss')

        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))

        .pipe(gulp.dest('./dist/css'))

    done()
}