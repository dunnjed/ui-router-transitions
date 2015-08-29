var gulp = require('gulp');
var sass = require('gulp-sass');
//var prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

gulp.task('sass', function () {
	return gulp.src('app/scss/*.scss')
	.pipe(sass(/*{outputStyle: 'compressed', sourceComments: 'map'}, {errLogToConsole: true}*/))
	//.pipe(prefix("last 2 versions", "> 1%", "ie 8", "Android 2", "Firefox ESR"))
	.pipe(gulp.dest('app/css'))
	.pipe(reload({stream:true}));
});

gulp.task('browser-sync', [/*'nodemon'*/], function() {
	browserSync.init(null, {
    server: {
            baseDir: "./app"
        }
		//proxy: "http://localhost:5000",
     //   files: ["app/**/*.*"],
       // browser: "google chrome",
        //port: 7000,
       // baseDir: "./app"
	});
});

gulp.task('default', ['sass', 'browser-sync'], function () {
	gulp.watch("app/scss/*.scss", ['sass']);
	gulp.watch(["app/js/**/*.js", "app/**/*.html"], reload);
});


// we'd need a slight delay to reload browsers
// connected to browser-sync after restarting nodemon
var BROWSER_SYNC_RELOAD_DELAY = 1000;

gulp.task('nodemon', function (cb) {
	var called = false;
  return nodemon({

    // nodemon our expressjs server
    script: 'app.js',

    // watch core server file(s) that require server restart on change
    watch: ['app.js']
  })
    .on('start', function onStart() {
      // ensure start only got called once
      if (!called) { cb(); }
      called = true;
    })
    .on('restart', function onRestart() {
      // reload connected browsers after a slight delay
      setTimeout(function reload() {
        browserSync.reload({
          stream: false   //
        });
      }, BROWSER_SYNC_RELOAD_DELAY);
    });
});