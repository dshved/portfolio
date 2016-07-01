//Sidebar на страницe Blog
var SidebarBlog = (function() {

  var init = function() {
    _setUpListners();
  };

  var sidebar = $('.sidebar__inner');


  var _setUpListners = function() {
    sidebar.on('click', _sidebarActive);
    $(window).scroll(_sidebarFixed);
  };

  var _sidebarActive = function(e) {
    e.preventDefault();
    $('.sidebar').toggleClass('sidebar__active');
  };


  var top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));

  var _sidebarFixed = function(e) {
    var y = $(this).scrollTop();
    if (y >= top) {
      sidebar.addClass('fixed');
    } else {
      sidebar.removeClass('fixed');
    };
  };

  return {
    init: init
  }
})();

SidebarBlog.init();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzaWRlYmFyYmxvZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1NpZGViYXIg0L3QsCDRgdGC0YDQsNC90LjRhmUgQmxvZ1xyXG52YXIgU2lkZWJhckJsb2cgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gIHZhciBpbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfc2V0VXBMaXN0bmVycygpO1xyXG4gIH07XHJcblxyXG4gIHZhciBzaWRlYmFyID0gJCgnLnNpZGViYXJfX2lubmVyJyk7XHJcblxyXG5cclxuICB2YXIgX3NldFVwTGlzdG5lcnMgPSBmdW5jdGlvbigpIHtcclxuICAgIHNpZGViYXIub24oJ2NsaWNrJywgX3NpZGViYXJBY3RpdmUpO1xyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChfc2lkZWJhckZpeGVkKTtcclxuICB9O1xyXG5cclxuICB2YXIgX3NpZGViYXJBY3RpdmUgPSBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcuc2lkZWJhcicpLnRvZ2dsZUNsYXNzKCdzaWRlYmFyX19hY3RpdmUnKTtcclxuICB9O1xyXG5cclxuXHJcbiAgdmFyIHRvcCA9IHNpZGViYXIub2Zmc2V0KCkudG9wIC0gcGFyc2VGbG9hdChzaWRlYmFyLmNzcygnbWFyZ2luLXRvcCcpKTtcclxuXHJcbiAgdmFyIF9zaWRlYmFyRml4ZWQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgeSA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgICBpZiAoeSA+PSB0b3ApIHtcclxuICAgICAgc2lkZWJhci5hZGRDbGFzcygnZml4ZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNpZGViYXIucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0OiBpbml0XHJcbiAgfVxyXG59KSgpO1xyXG5cclxuU2lkZWJhckJsb2cuaW5pdCgpO1xyXG4iXSwiZmlsZSI6InNpZGViYXJibG9nLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
