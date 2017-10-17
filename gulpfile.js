var gulp = require('gulp'); 
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var cssnano = require('gulp-cssnano');

gulp.task('sass', function(){
  return gulp.src('devResources/sass/*.sass')
    .pipe(sass()) // Using gulp-sass
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(concat("all.css"))
    .pipe(cssnano())
    .pipe(gulp.dest('css'))
});
gulp.task('watch', function(){
  return gulp.watch('devResources/sass/*.sass', ['sass']); 
  // Other watchers
})

gulp.task("default", ["watch", "sass"]);