var gulp = require('gulp');
var zip = require("gulp-zip");
path = require('path');

/*-------------------------------------------------------------------
Create zip file
-------------------------------------------------------------------*/
gulp.task("zip", function () {
 return gulp.src([
   'manifest.json',
   'js/background.js',
   'images/*',
  ], {base: "."})
  .pipe(zip('prisjakt.zip'))
  .pipe(gulp.dest('./ship'));
});