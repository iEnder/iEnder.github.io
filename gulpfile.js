const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const concat = require('gulp-concat');

gulp.task('rebuild', ['sass'], function() {
    browserSync.reload({});
})

gulp.task('browser-sync', ['sass'], function() {
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false
    });
});

gulp.task('sass', function() {
    return gulp.src('_scss/*.scss')
        .pipe(concat('main.scss'))
        .pipe(sass().on('error', function(err) {
            console.error(err.message);
            browserSync.notify(err.message, 3000);
            this.emit('end');
        }))
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(minify())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('_scss/*.scss', ['sass']);
    gulp.watch(['*.html', 'js/*.js', '_scss/*.scss'], ['rebuild']);
});

gulp.task('default', ['browser-sync', 'watch']);