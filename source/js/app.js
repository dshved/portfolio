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
    $('.welcome__container').toggleClass('flipped');
    $('.login-btn').css({
      'visibility': 'hidden'
    });
  };
 
  var _showInfo = function (e) {
    $('.welcome__container').removeClass('flipped');
    $('.login-btn').css({
      'visibility': 'visible'
    });
  };
  
  return {
    init : init
  }
})();

myModule.init();


  // $(function(){
  //       var x = 0;
  //       setInterval(function(){
  //           x-=1;
  //           $('.wrapper').css('background-position', x + 'px 0');
  //       }, 50);
  //   })

$(document).ready(function(){

  setTimeout(function(){
    $( "#page-preloader" ).fadeOut( "slow" );
  }, 3000);
  


  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $('#overlay').toggleClass('open');
  });
});