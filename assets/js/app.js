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
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG15TW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgX3NldFVwTGlzdG5lcnMoKTtcclxuICAgIH07XHJcblxyXG4gIHZhciBfc2V0VXBMaXN0bmVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5sb2dpbi1idG4nKS5vbignY2xpY2snLCBfc2hvd0xvZ2luKTtcclxuICAgICQoJy5mb290ZXInKS5vbignY2xpY2snLCBfc2hvd0luZm8pO1xyXG4gICAgJCgnLmluZGV4Jykub24oJ2NsaWNrJywgX3Nob3dJbmZvKTtcclxuXHJcbiAgfTtcclxuXHJcbiAgdmFyIF9zaG93TG9naW4gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLndlbGNvbWVfX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdmbGlwcGVkJyk7XHJcbiAgICAkKCcubG9naW4tYnRuJykuY3NzKHtcclxuICAgICAgJ3Zpc2liaWxpdHknOiAnaGlkZGVuJ1xyXG4gICAgfSk7XHJcbiAgfTtcclxuIFxyXG4gIHZhciBfc2hvd0luZm8gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgJCgnLndlbGNvbWVfX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdmbGlwcGVkJyk7XHJcbiAgICAkKCcubG9naW4tYnRuJykuY3NzKHtcclxuICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZSdcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQgOiBpbml0XHJcbiAgfVxyXG59KSgpO1xyXG5cclxubXlNb2R1bGUuaW5pdCgpO1xyXG5cclxuXHJcbiAgLy8gJChmdW5jdGlvbigpe1xyXG4gIC8vICAgICAgIHZhciB4ID0gMDtcclxuICAvLyAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gIC8vICAgICAgICAgICB4LT0xO1xyXG4gIC8vICAgICAgICAgICAkKCcud3JhcHBlcicpLmNzcygnYmFja2dyb3VuZC1wb3NpdGlvbicsIHggKyAncHggMCcpO1xyXG4gIC8vICAgICAgIH0sIDUwKTtcclxuICAvLyAgIH0pXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAkKCBcIiNwYWdlLXByZWxvYWRlclwiICkuZmFkZU91dCggXCJzbG93XCIgKTtcclxuICB9LCAzMDAwKTtcclxuICBcclxuXHJcblxyXG4gICQoJyNuYXYtaWNvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgfSk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
