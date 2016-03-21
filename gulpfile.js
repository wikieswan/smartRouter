var gulp = require('gulp'),
	rename = require('gulp-rename'),
	connect = require('gulp-connect'), 
	rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),          
    stylish = require('jshint-stylish'),
    uglify  = require('gulp-uglify'),          

    del = require('del');



gulp.task('connect', function() {
    var isWin = /^win/.test(process.platform);
    connect.server({
        root: './',
        port: 3000,
        livereload: true
    });
});    

gulp.task("script",function(){
    gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(uglify())
    .pipe(rename({ suffix: '-min-1.0.0' }))
    .pipe(gulp.dest('./dist/'))
});


gulp.task('watch', function () {
    gulp.watch(['./src/*.js'], ['script']);
});

gulp.task('default',function(){
	 gulp.start(['watch', 'connect']);
})
