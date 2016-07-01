//Медленный скрол
var SlowScroll = (function() {

  var init = function() {
    _serUpListners();
  };

  var _serUpListners = function() {
    $('a[href*="#"]:not([href="#"])').on('click', _slowScroll);
  };

  var _slowScroll = function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  };

  return {
    init: init
  }
})();


SlowScroll.init();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzbG93c2Nyb2xsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8v0JzQtdC00LvQtdC90L3Ri9C5INGB0LrRgNC+0LtcclxudmFyIFNsb3dTY3JvbGwgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gIHZhciBpbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfc2VyVXBMaXN0bmVycygpO1xyXG4gIH07XHJcblxyXG4gIHZhciBfc2VyVXBMaXN0bmVycyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5vbignY2xpY2snLCBfc2xvd1Njcm9sbCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIF9zbG93U2Nyb2xsID0gZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcclxuICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcclxuICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyAnXScpO1xyXG4gICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0OiBpbml0XHJcbiAgfVxyXG59KSgpO1xyXG5cclxuXHJcblNsb3dTY3JvbGwuaW5pdCgpOyJdLCJmaWxlIjoic2xvd3Njcm9sbC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
