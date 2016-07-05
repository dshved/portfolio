//Sidebar на страницe Blog
var SidebarBlog = (function() {

  var init = function() {
    _setUpListners();
  };

  var sidebar = $('.sidebar__inner');


  var _setUpListners = function() {
    sidebar.on('click', _sidebarActive);
    $(window).scroll(_sidebarFixed);
    $(window).resize(_windowResize);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzaWRlYmFyYmxvZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1NpZGViYXIg0L3QsCDRgdGC0YDQsNC90LjRhmUgQmxvZ1xyXG52YXIgU2lkZWJhckJsb2cgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gIHZhciBpbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfc2V0VXBMaXN0bmVycygpO1xyXG4gIH07XHJcblxyXG4gIHZhciBzaWRlYmFyID0gJCgnLnNpZGViYXJfX2lubmVyJyk7XHJcblxyXG5cclxuICB2YXIgX3NldFVwTGlzdG5lcnMgPSBmdW5jdGlvbigpIHtcclxuICAgIHNpZGViYXIub24oJ2NsaWNrJywgX3NpZGViYXJBY3RpdmUpO1xyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChfc2lkZWJhckZpeGVkKTtcclxuICAgICQod2luZG93KS5yZXNpemUoX3dpbmRvd1Jlc2l6ZSk7XHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKF9zaWRlYmFyQWN0aXZlUG9zdCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIF9zaWRlYmFyQWN0aXZlID0gZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLnNpZGViYXInKS50b2dnbGVDbGFzcygnc2lkZWJhcl9fYWN0aXZlJyk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIF93aW5kb3dSZXNpemUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGJsb2cgPSAkKCcuYmxvZ19fY29udGVudCcpLm9mZnNldCgpLnRvcDtcclxuICAgICAgcmV0dXJuIGJsb2c7XHJcbiAgICB9XHJcbiAgICAvLyB2YXIgdG9wID0gc2lkZWJhci5vZmZzZXQoKS50b3AgLSBwYXJzZUZsb2F0KHNpZGViYXIuY3NzKCdtYXJnaW4tdG9wJykpO1xyXG5cclxuXHJcbiAgdmFyIF9zaWRlYmFyRml4ZWQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgdG9wID0gX3dpbmRvd1Jlc2l6ZSgpO1xyXG5cclxuICAgIHZhciB5ID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBpZiAoeSA+PSB0b3ApIHtcclxuICAgICAgc2lkZWJhci5hZGRDbGFzcygnZml4ZWQnKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaWRlYmFyLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuXHJcbiAgdmFyIHNlY3Rpb24gPSAkKCcuYXJ0aWNsZScpO1xyXG5cclxuICB2YXIgX3NpZGViYXJBY3RpdmVQb3N0ID0gZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgIHZhciBzTGluayA9ICQoJy5zaWRlYmFyX19saW5rJyk7XHJcbiAgICBzZWN0aW9uLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW0pIHtcclxuICAgICAgdmFyIHRvcEVkZ2UgPSAkKGVsZW0pLm9mZnNldCgpLnRvcCAtIHNjcm9sbDtcclxuICAgICAgdmFyIGJvdHRvbUVkZ2UgPSB0b3BFZGdlICsgJChlbGVtKS5oZWlnaHQoKTtcclxuICAgICAgaWYgKHRvcEVkZ2UgPCAxMCAmJiBib3R0b21FZGdlID4gMTApIHtcclxuICAgICAgICBzTGluay5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnI2xpbmstJyArIGluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQ6IGluaXRcclxuICB9XHJcbn0pKCk7XHJcblxyXG5TaWRlYmFyQmxvZy5pbml0KCk7XHJcbiJdLCJmaWxlIjoic2lkZWJhcmJsb2cuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
