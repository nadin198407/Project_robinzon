var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');


gulp.task('styl', function () {
  gulp.src('stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('css'));
});

gulp.task('concat', function () {
  gulp.src('css/*.css')
    .pipe(concatCss("itog.css"))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
  gulp.watch('stylus/*.styl',['styl']);
  gulp.watch("js/*.js", ['js']);
});

gulp.task('js', function () {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('default', function() {
    return gulp.src('css/*.css')
        .pipe(autoprefixer([
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 20',
            'Firefox >= 24',
            'Explorer >= 8',
            'iOS >= 6',
            'Opera >= 12',
            'Safari >= 6'
        ]))
        .pipe(gulp.dest('css'));

});

gulp.task('css', function () {
    return gulp.src('css/*.css')
        .pipe(uncss({
            html: ['*.html']
         }))
        .pipe(gulp.dest('build'));
});
  
  