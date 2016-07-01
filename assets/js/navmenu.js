//Меню навигации
var NavMenu = (function(){

  var init = function (){
    _setUpListners();
  }
  //Прослушка событий
  var _setUpListners = function(){
    $('#nav-icon').on('click', _showMenu);
  }

  var _showMenu = function(e){
    e.preventDefault();
    $('body').toggleClass('overflow');
    $(this).toggleClass('open');
    $('#overlay').toggleClass('open');
  }


  return {
    init: init
  }
})();

NavMenu.init();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJuYXZtZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8v0JzQtdC90Y4g0L3QsNCy0LjQs9Cw0YbQuNC4XHJcbnZhciBOYXZNZW51ID0gKGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCl7XHJcbiAgICBfc2V0VXBMaXN0bmVycygpO1xyXG4gIH1cclxuICAvL9Cf0YDQvtGB0LvRg9GI0LrQsCDRgdC+0LHRi9GC0LjQuVxyXG4gIHZhciBfc2V0VXBMaXN0bmVycyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcjbmF2LWljb24nKS5vbignY2xpY2snLCBfc2hvd01lbnUpO1xyXG4gIH1cclxuXHJcbiAgdmFyIF9zaG93TWVudSA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdycpO1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgJCgnI292ZXJsYXknKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0OiBpbml0XHJcbiAgfVxyXG59KSgpO1xyXG5cclxuTmF2TWVudS5pbml0KCk7Il0sImZpbGUiOiJuYXZtZW51LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
