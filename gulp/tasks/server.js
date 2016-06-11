'use strict';

module.exports = function() {
	$.gulp.task('server', function() {
		$.browserSync.init({
			open: true,
			server: $.config.root
		});
		$.browserSync.watch([$.config.root + '/**/*.*'], $.browserSync.reload);
	});
};