//Переворачивание карточки на странице index
var Flip = (function() {
  'use strict';

  var init = function() {
    _setUpListners();
  };

  //Прослушка событий
  var _setUpListners = function() {
    $('.login-btn').on('click', _showLogin); //Click на кнопку "Авторизация"
    $('.btn-index').on('click', _showInfo); //Click на кнопку "На главную"
    $('.index').on('click', _showInfo); //Click на кнопку "На главную" на странице AUTH
    $('.wrapper.bg').on('click', _backgroundClick); //Click на background
  };

  var _showLogin = function(e) {
    e.preventDefault();
    $('.flip').toggleClass('flipping');
    $('.login-btn').css({
      'visibility': 'hidden'
    });
  };

  var _showInfo = function(e) {
    e.preventDefault();
    $('.flip').removeClass('flipping');
    $('.login-btn').css({
      'visibility': 'visible'
    });
  };

  //Переворачивание карточки при нажатии на background
  var _backgroundClick = function(e) {
    if (e.target.className == 'wrapper bg') {
      $('.flip').removeClass('flipping');
      $('.login-btn').css({
        'visibility': 'visible'
      });
    }
  };

  return {
    init: init
  }
})();

Flip.init();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmbGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8v0J/QtdGA0LXQstC+0YDQsNGH0LjQstCw0L3QuNC1INC60LDRgNGC0L7Rh9C60Lgg0L3QsCDRgdGC0YDQsNC90LjRhtC1IGluZGV4XHJcbnZhciBGbGlwID0gKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgdmFyIGluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIF9zZXRVcExpc3RuZXJzKCk7XHJcbiAgfTtcclxuXHJcbiAgLy/Qn9GA0L7RgdC70YPRiNC60LAg0YHQvtCx0YvRgtC40LlcclxuICB2YXIgX3NldFVwTGlzdG5lcnMgPSBmdW5jdGlvbigpIHtcclxuICAgICQoJy5sb2dpbi1idG4nKS5vbignY2xpY2snLCBfc2hvd0xvZ2luKTsgLy9DbGljayDQvdCwINC60L3QvtC/0LrRgyBcItCQ0LLRgtC+0YDQuNC30LDRhtC40Y9cIlxyXG4gICAgJCgnLmJ0bi1pbmRleCcpLm9uKCdjbGljaycsIF9zaG93SW5mbyk7IC8vQ2xpY2sg0L3QsCDQutC90L7Qv9C60YMgXCLQndCwINCz0LvQsNCy0L3Rg9GOXCJcclxuICAgICQoJy5pbmRleCcpLm9uKCdjbGljaycsIF9zaG93SW5mbyk7IC8vQ2xpY2sg0L3QsCDQutC90L7Qv9C60YMgXCLQndCwINCz0LvQsNCy0L3Rg9GOXCIg0L3QsCDRgdGC0YDQsNC90LjRhtC1IEFVVEhcclxuICAgICQoJy53cmFwcGVyLmJnJykub24oJ2NsaWNrJywgX2JhY2tncm91bmRDbGljayk7IC8vQ2xpY2sg0L3QsCBiYWNrZ3JvdW5kXHJcbiAgfTtcclxuXHJcbiAgdmFyIF9zaG93TG9naW4gPSBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcuZmxpcCcpLnRvZ2dsZUNsYXNzKCdmbGlwcGluZycpO1xyXG4gICAgJCgnLmxvZ2luLWJ0bicpLmNzcyh7XHJcbiAgICAgICd2aXNpYmlsaXR5JzogJ2hpZGRlbidcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHZhciBfc2hvd0luZm8gPSBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcuZmxpcCcpLnJlbW92ZUNsYXNzKCdmbGlwcGluZycpO1xyXG4gICAgJCgnLmxvZ2luLWJ0bicpLmNzcyh7XHJcbiAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvL9Cf0LXRgNC10LLQvtGA0LDRh9C40LLQsNC90LjQtSDQutCw0YDRgtC+0YfQutC4INC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwIGJhY2tncm91bmRcclxuICB2YXIgX2JhY2tncm91bmRDbGljayA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gJ3dyYXBwZXIgYmcnKSB7XHJcbiAgICAgICQoJy5mbGlwJykucmVtb3ZlQ2xhc3MoJ2ZsaXBwaW5nJyk7XHJcbiAgICAgICQoJy5sb2dpbi1idG4nKS5jc3Moe1xyXG4gICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0OiBpbml0XHJcbiAgfVxyXG59KSgpO1xyXG5cclxuRmxpcC5pbml0KCk7Il0sImZpbGUiOiJmbGlwLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
