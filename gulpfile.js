'use strict';

global.$ = {
	package: require('./package.json'),
	config: require('./gulp/config'),
	path: {
		task: require('./gulp/paths/tasks.js'),
		template: require('./gulp/paths/template.js'),
		jsFoundation: require('./gulp/paths/js.foundation.js'),
		cssFoundation: require('./gulp/paths/css.foundation.js'),
		app: require('./gulp/paths/app.js')
	},
	gulp: require('gulp'),
	rimraf: require('rimraf'),
	ghPages: require('gulp-gh-pages'),
	browserSync: require('browser-sync').create(),
	gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
	require(taskPath)();
});

$.gulp.task('deploy', function() {
  return $.gulp.src('./build/**/*.*')
    .pipe($.ghPages());
});

$.gulp.task('default', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'sass',
		'pug',
		'js.foundation',
		'js.process',
		'copy.image',
		'copy.fonts',
		'css.foundation'
	),
	$.gulp.parallel(
		'watch',
		'server'
	)
));