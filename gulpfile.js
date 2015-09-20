var gulp = require('gulp'),
  mocha = require('gulp-mocha'),
  nodemon = require('gulp-nodemon');

gulp.task('mocha', function() {
  gulp.src("test/*.js", {read: false})
    .pipe(mocha({reporter: "spec"}))
    .on('error', function(err) {
      console.error(err.message);
    });
});

gulp.task('nodemon', function() {
  nodemon({
    script: "app.js",
    ext: "js",
    env: {
      "ENV": "development",
      "PORT": "3000"
    }
  });
});

gulp.task('watch', function() {
  gulp.watch(["*.js", "test/**", "**/**"], ['mocha']);
});

gulp.task('default', ['nodemon', 'mocha', 'watch']);