//Sidebar на страницe Blog
var SidebarBlog = (function() {

  var init = function() {
    _setUpListners();
  };

  var sidebar = $('.sidebar__inner');


  var _setUpListners = function() {
    sidebar.on('click', _sidebarActive);
    $(window).scroll(_sidebarFixed);
    $(window).resize(_windowResize,_sidebarActivePost);
    $(window).scroll(_sidebarActivePost);
  };

  var _sidebarActive = function(e) {
    e.preventDefault();
    $('.sidebar').toggleClass('sidebar__active');
  };

  var _windowResize = function() {
      var blog = $('.blog__content').offset().top;
      return blog;
    }
    // var top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));


  var _sidebarFixed = function(e) {
    var top = _windowResize();

    var y = $(this).scrollTop();

    if (y >= top) {
      sidebar.addClass('fixed');

    } else {
      sidebar.removeClass('fixed');
    };
  };


  var section = $('.article');

  var _sidebarActivePost = function(e) {
    var scroll = $(window).scrollTop();
    var sLink = $('.sidebar__link');
    section.each(function(index, elem) {
      var topEdge = $(elem).offset().top - scroll;
      var bottomEdge = topEdge + $(elem).height();
      if (topEdge < 10 && bottomEdge > 10) {
        sLink.removeClass('active');
        $('#link-' + index).addClass('active');
      }
    });
  }

  return {
    init: init
  }
})();

SidebarBlog.init();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzaWRlYmFyYmxvZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1NpZGViYXIg0L3QsCDRgdGC0YDQsNC90LjRhmUgQmxvZ1xyXG52YXIgU2lkZWJhckJsb2cgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gIHZhciBpbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfc2V0VXBMaXN0bmVycygpO1xyXG4gIH07XHJcblxyXG4gIHZhciBzaWRlYmFyID0gJCgnLnNpZGViYXJfX2lubmVyJyk7XHJcblxyXG5cclxuICB2YXIgX3NldFVwTGlzdG5lcnMgPSBmdW5jdGlvbigpIHtcclxuICAgIHNpZGViYXIub24oJ2NsaWNrJywgX3NpZGViYXJBY3RpdmUpO1xyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChfc2lkZWJhckZpeGVkKTtcclxuICAgICQod2luZG93KS5yZXNpemUoX3dpbmRvd1Jlc2l6ZSxfc2lkZWJhckFjdGl2ZVBvc3QpO1xyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChfc2lkZWJhckFjdGl2ZVBvc3QpO1xyXG4gIH07XHJcblxyXG4gIHZhciBfc2lkZWJhckFjdGl2ZSA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJy5zaWRlYmFyJykudG9nZ2xlQ2xhc3MoJ3NpZGViYXJfX2FjdGl2ZScpO1xyXG4gIH07XHJcblxyXG4gIHZhciBfd2luZG93UmVzaXplID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBibG9nID0gJCgnLmJsb2dfX2NvbnRlbnQnKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgIHJldHVybiBibG9nO1xyXG4gICAgfVxyXG4gICAgLy8gdmFyIHRvcCA9IHNpZGViYXIub2Zmc2V0KCkudG9wIC0gcGFyc2VGbG9hdChzaWRlYmFyLmNzcygnbWFyZ2luLXRvcCcpKTtcclxuXHJcblxyXG4gIHZhciBfc2lkZWJhckZpeGVkID0gZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIHRvcCA9IF93aW5kb3dSZXNpemUoKTtcclxuXHJcbiAgICB2YXIgeSA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgaWYgKHkgPj0gdG9wKSB7XHJcbiAgICAgIHNpZGViYXIuYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2lkZWJhci5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcblxyXG4gIHZhciBzZWN0aW9uID0gJCgnLmFydGljbGUnKTtcclxuXHJcbiAgdmFyIF9zaWRlYmFyQWN0aXZlUG9zdCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICB2YXIgc0xpbmsgPSAkKCcuc2lkZWJhcl9fbGluaycpO1xyXG4gICAgc2VjdGlvbi5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtKSB7XHJcbiAgICAgIHZhciB0b3BFZGdlID0gJChlbGVtKS5vZmZzZXQoKS50b3AgLSBzY3JvbGw7XHJcbiAgICAgIHZhciBib3R0b21FZGdlID0gdG9wRWRnZSArICQoZWxlbSkuaGVpZ2h0KCk7XHJcbiAgICAgIGlmICh0b3BFZGdlIDwgMTAgJiYgYm90dG9tRWRnZSA+IDEwKSB7XHJcbiAgICAgICAgc0xpbmsucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJyNsaW5rLScgKyBpbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0OiBpbml0XHJcbiAgfVxyXG59KSgpO1xyXG5cclxuU2lkZWJhckJsb2cuaW5pdCgpO1xyXG4iXSwiZmlsZSI6InNpZGViYXJibG9nLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
