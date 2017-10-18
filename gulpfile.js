var gulp = require('gulp'); 
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var uglify = require("gulp-uglify");

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
gulp.task('scripts', function(){
  return gulp.src('devResources/js/*.js')
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
});
gulp.task('watch', function(){
  gulp.watch('devResources/sass/*.sass', ['sass']); 
  gulp.watch('devResources/js/*.js', ['scripts']); 
  // Other watchers
})

gulp.task("default", ["watch", "sass", "scripts"]);