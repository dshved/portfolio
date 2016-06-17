'use strict';

module.exports = function() {
  $.gulp.task('svg.sprite', function () {
    return $.gulp.src('./source/img/icons/*.svg')
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe($.gp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {xmlMode: true}
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.svgSprite({
        dest : '.',
        mode: {
          symbol: {
            dest : '.',
            sprite: "img/sprite.svg",
            render: {
              scss: {
                dest:'style/sprite/_sprite.scss',
                template: "./source/style/sprite/_template.scss"
              }
            }
          }
        }
      }))
      .pipe($.gulp.dest('./source'));
  });
};