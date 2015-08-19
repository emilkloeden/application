var gulp = require('gulp');


var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var babelify = require('babelify');


gulp.task('js', function() {
    browserify('./public/javascripts/src/app.jsx')
        //.transform(reactify)
        .transform(babelify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('public/javascripts/build/'))
});

gulp.task('sass', function() {
    gulp.src('public/stylesheets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/stylesheets/css'));
});

gulp.task('jade', function() {
    console.log("jade template updated")
})


gulp.task('watch', function() {
    gulp.watch('public/javascripts/src/**/*.js*', ['js']);
    gulp.watch("public/stylesheets/scss/*.scss", ["sass"]);
    gulp.watch("views/*.jade",["jade"]);
});

gulp.task('default', ['js', 'sass', 'watch']);