//Sidebar на страницe Blog
var SidebarBlog = (function() {

  var init = function() {
    _setUpListners();
  };

  var sidebar = $('.sidebar__inner');


  var _setUpListners = function() {
    sidebar.on('click', _sidebarActive);
    $(window).scroll(_sidebarFixed);
    $(window).resize(_windowResize,_sidebarFixed);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzaWRlYmFyYmxvZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1NpZGViYXIg0L3QsCDRgdGC0YDQsNC90LjRhmUgQmxvZ1xyXG52YXIgU2lkZWJhckJsb2cgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gIHZhciBpbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfc2V0VXBMaXN0bmVycygpO1xyXG4gIH07XHJcblxyXG4gIHZhciBzaWRlYmFyID0gJCgnLnNpZGViYXJfX2lubmVyJyk7XHJcblxyXG5cclxuICB2YXIgX3NldFVwTGlzdG5lcnMgPSBmdW5jdGlvbigpIHtcclxuICAgIHNpZGViYXIub24oJ2NsaWNrJywgX3NpZGViYXJBY3RpdmUpO1xyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChfc2lkZWJhckZpeGVkKTtcclxuICAgICQod2luZG93KS5yZXNpemUoX3dpbmRvd1Jlc2l6ZSxfc2lkZWJhckZpeGVkKTtcclxuICAgICQod2luZG93KS5zY3JvbGwoX3NpZGViYXJBY3RpdmVQb3N0KTtcclxuICB9O1xyXG5cclxuICB2YXIgX3NpZGViYXJBY3RpdmUgPSBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcuc2lkZWJhcicpLnRvZ2dsZUNsYXNzKCdzaWRlYmFyX19hY3RpdmUnKTtcclxuICB9O1xyXG5cclxuICB2YXIgX3dpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgYmxvZyA9ICQoJy5ibG9nX19jb250ZW50Jykub2Zmc2V0KCkudG9wO1xyXG4gICAgICByZXR1cm4gYmxvZztcclxuICAgIH1cclxuICAgIC8vIHZhciB0b3AgPSBzaWRlYmFyLm9mZnNldCgpLnRvcCAtIHBhcnNlRmxvYXQoc2lkZWJhci5jc3MoJ21hcmdpbi10b3AnKSk7XHJcblxyXG5cclxuICB2YXIgX3NpZGViYXJGaXhlZCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciB0b3AgPSBfd2luZG93UmVzaXplKCk7XHJcblxyXG4gICAgdmFyIHkgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGlmICh5ID49IHRvcCkge1xyXG4gICAgICBzaWRlYmFyLmFkZENsYXNzKCdmaXhlZCcpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNpZGViYXIucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG5cclxuICB2YXIgc2VjdGlvbiA9ICQoJy5hcnRpY2xlJyk7XHJcblxyXG4gIHZhciBfc2lkZWJhckFjdGl2ZVBvc3QgPSBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgdmFyIHNMaW5rID0gJCgnLnNpZGViYXJfX2xpbmsnKTtcclxuICAgIHNlY3Rpb24uZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbSkge1xyXG4gICAgICB2YXIgdG9wRWRnZSA9ICQoZWxlbSkub2Zmc2V0KCkudG9wIC0gc2Nyb2xsO1xyXG4gICAgICB2YXIgYm90dG9tRWRnZSA9IHRvcEVkZ2UgKyAkKGVsZW0pLmhlaWdodCgpO1xyXG4gICAgICBpZiAodG9wRWRnZSA8IDEwICYmIGJvdHRvbUVkZ2UgPiAxMCkge1xyXG4gICAgICAgIHNMaW5rLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcjbGluay0nICsgaW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5pdDogaW5pdFxyXG4gIH1cclxufSkoKTtcclxuXHJcblNpZGViYXJCbG9nLmluaXQoKTtcclxuIl0sImZpbGUiOiJzaWRlYmFyYmxvZy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
