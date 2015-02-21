var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jade = require('gulp-jade');
var less = require('gulp-less');
var path = require('path');

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('dist/all.min.js'))
        .pipe(gulp.dest('dist'))
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Compile LESS -> CSS
gulp.task('less', function () {
  gulp.src('./src/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('templates', function() {
    var YOUR_LOCALS = {};
    gulp.src('src/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS,
            pretty: true
        }))
    .pipe(gulp.dest('./dist/'))
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/*.jade', ['templates']);
    gulp.watch('src/less/*.less', ['less']);
});
