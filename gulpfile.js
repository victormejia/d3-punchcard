var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var ghPages     = require('gulp-gh-pages');

// use default task to launch Browsersync and watch JS files
gulp.task('serve',  function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("app/**/*").on("change", browserSync.reload);
});


gulp.task('deploy', function() {
  return gulp.src('./app/**/*')
    .pipe(ghPages());
})
