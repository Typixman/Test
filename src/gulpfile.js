var gulp = require('gulp');
var less = require('gulp-less');  
var path = require('path');

gulp.task('css', function () {  
  return gulp.src('*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('css'))
    .on('error', gutil.log);
});

var watch = require('gulp-watch');

gulp.task('css:watch', function () {  
  watch({
    glob: '*.less',
    emit: 'one',
    emitOnGlob: false
  }, function(files) {
    return files
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
       }))
      .pipe(gulp.dest('css'))
      .on('error', gutil.log);
  });
});