var myModule = (function () {
  'use strict';

  var init = function () {
    _setUpListners();
    };

  var _setUpListners = function () {
    $('.login-btn').on('click', _showLogin);
    $('.btn-index').on('click', _showInfo);
    $('.index').on('click', _showInfo);
  };

  var _showLogin = function (e) {
    e.preventDefault();
    $('.flip').toggleClass('flipping');
    $('.login-btn').css({
      'visibility': 'hidden'
    });
  };
 
  var _showInfo = function (e) {
    $('.flip').removeClass('flipping');
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
    $( ".welcome" ).css('visibility', 'visible');
  }, 4000);
  
  $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now) + '%');
      }
    });
  });
  
  //Меню навигации
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $('#overlay').toggleClass('open');
  });

  //Sidebar blog
  var sidebar = $('.sidebar__inner');
  var top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));

  $(window).scroll(function (event) {
    var y = $(this).scrollTop();
    if (y >= top) {
      sidebar.addClass('fixed');
    } else {
      sidebar.removeClass('fixed');
    }
  });


});

  
