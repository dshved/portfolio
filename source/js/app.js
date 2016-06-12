var myModule = (function () {
  'use strict';

  var init = function () {
    _setUpListners();
    };

  var _setUpListners = function () {
    $('.login-btn').on('click', _showLogin);
    $('.footer').on('click', _showInfo);
    $('.index').on('click', _showInfo);

  };

  var _showLogin = function (e) {
    e.preventDefault();
    $('.card').addClass('flipped');
    $('.login-btn').css('display', 'none');
    $('.card__login').css('background-color', 'rgba(215, 191, 155, 1)');
  };
 
  var _showInfo = function (e) {
    
    $('.card').removeClass('flipped');
    $('.login-btn').css('display', 'inline-block');
  };
  
  return {
    init : init
  }
})();

myModule.init();

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

  // $(function(){
  //       var x = 0;
  //       setInterval(function(){
  //           x-=1;
  //           $('.wrapper').css('background-position', x + 'px 0');
  //       }, 50);
  //   })