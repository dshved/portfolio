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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG15TW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgX3NldFVwTGlzdG5lcnMoKTtcclxuICAgIH07XHJcblxyXG4gIHZhciBfc2V0VXBMaXN0bmVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5sb2dpbi1idG4nKS5vbignY2xpY2snLCBfc2hvd0xvZ2luKTtcclxuICAgICQoJy5mb290ZXInKS5vbignY2xpY2snLCBfc2hvd0luZm8pO1xyXG4gICAgJCgnLmluZGV4Jykub24oJ2NsaWNrJywgX3Nob3dJbmZvKTtcclxuXHJcbiAgfTtcclxuXHJcbiAgdmFyIF9zaG93TG9naW4gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLmNhcmQnKS5hZGRDbGFzcygnZmxpcHBlZCcpO1xyXG4gICAgJCgnLmxvZ2luLWJ0bicpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAkKCcuY2FyZF9fbG9naW4nKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAncmdiYSgyMTUsIDE5MSwgMTU1LCAxKScpO1xyXG4gIH07XHJcbiBcclxuICB2YXIgX3Nob3dJbmZvID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIFxyXG4gICAgJCgnLmNhcmQnKS5yZW1vdmVDbGFzcygnZmxpcHBlZCcpO1xyXG4gICAgJCgnLmxvZ2luLWJ0bicpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcclxuICB9O1xyXG4gIFxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0IDogaW5pdFxyXG4gIH1cclxufSkoKTtcclxuXHJcbm15TW9kdWxlLmluaXQoKTtcclxuXHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciAkcHJlbG9hZGVyID0gJCgnI3BhZ2UtcHJlbG9hZGVyJyksXHJcbiAgICAgICAgJHNwaW5uZXIgICA9ICRwcmVsb2FkZXIuZmluZCgnLnNwaW5uZXInKTtcclxuICAgICRzcGlubmVyLmZhZGVPdXQoKTtcclxuICAgICRwcmVsb2FkZXIuZGVsYXkoMzUwKS5mYWRlT3V0KCdzbG93Jyk7XHJcbn0pO1xyXG5cclxuICAvLyAkKGZ1bmN0aW9uKCl7XHJcbiAgLy8gICAgICAgdmFyIHggPSAwO1xyXG4gIC8vICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgLy8gICAgICAgICAgIHgtPTE7XHJcbiAgLy8gICAgICAgICAgICQoJy53cmFwcGVyJykuY3NzKCdiYWNrZ3JvdW5kLXBvc2l0aW9uJywgeCArICdweCAwJyk7XHJcbiAgLy8gICAgICAgfSwgNTApO1xyXG4gIC8vICAgfSkiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
