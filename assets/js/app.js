var myModule = (function() {
  'use strict';

  var init = function() {
    _setUpListners();
  };

  var _setUpListners = function() {
    $('.login-btn').on('click', _showLogin);
    $('.btn-index').on('click', _showInfo);
    $('.index').on('click', _showInfo);
    $('.wrapper.bg').on('click', _backgroundClick);
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

  var _backgroundClick = function(e) {
    // e.preventDefault();
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

myModule.init();

//Смещение background
// $(function() {
//   var x = 0;
//   setInterval(function() {
//     x -= 1;
//     $('.wrapper').css('background-position', x + 'px 0');
//   }, 50);
// })


$(document).ready(function() {


  (function () {
    var counter = 1;

    $('.slider__link-right').on('click', function(e){
        e.preventDefault();
 
      var $this = $(this),
        container = $this.closest('.slider__right'),
        items = container.find('.slider__item'),
        activeItem = container.find('.slider__item.active');



      if (counter >= items.length) {
        counter = 0;
      }

      var reqItem = items.eq(counter);

      activeItem.animate({
        'bottom' : '100%'
      }, 300);

      reqItem.animate({
        'bottom' : '0%'
      }, 300, function () {
        activeItem.removeClass('active').css('bottom', '-100%');
        $(this).addClass('active');
      });

      counter++;

    });
  }());

  

   


  
  //Медленный скролл
  $('a[href*="#"]:not([href="#"])').click(function() {
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
  });


  setTimeout(function() {
    $("#page-preloader").fadeOut("slow");
    $(".bg").css('visibility', 'visible');
  }, 4000);

  $('.counter').each(function() {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now) + '%');
      }
    });
  });

  //Меню навигации
  $('#nav-icon').click(function() {
    $('body').toggleClass('overflow');
    $(this).toggleClass('open');
    $('#overlay').toggleClass('open');
  });

  //Sidebar
  $('.sidebar__inner').click(function () {
    $('.sidebar').toggleClass('sidebar__active');
  });


  //Sidebar blog
  var sidebar = $('.sidebar__inner');
  var top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));

  $(window).scroll(function(event) {
    var y = $(this).scrollTop();
    if (y >= top) {
      sidebar.addClass('fixed');
    } else {
      sidebar.removeClass('fixed');
    }
  });


});


google.maps.event.addDomListener(window, 'load', init);
var map;

function init() {
  var mapOptions = {
    center: new google.maps.LatLng(59.937475, 30.352243),
    zoom: 15,
    zoomControl: false,
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    scaleControl: false,
    scrollwheel: false,
    panControl: false,
    streetViewControl: false,
    draggable: true,
    overviewMapControl: false,
    overviewMapControlOptions: {
      opened: false,
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#444444"
      }]
    }, {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [{
        "color": "#f2f2f2"
      }]
    }, {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road",
      "elementType": "all",
      "stylers": [{
        "saturation": -100
      }, {
        "lightness": 45
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [{
        "visibility": "simplified"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{
        "color": "#ecae46"
      }, {
        "visibility": "on"
      }]
    }],
  }
  var mapElement = document.getElementById('mymap');
  var map = new google.maps.Map(mapElement, mapOptions);
  var locations = [];
  for (i = 0; i < locations.length; i++) {
    if (locations[i][1] == 'undefined') {
      description = '';
    } else {
      description = locations[i][1];
    }
    if (locations[i][2] == 'undefined') {
      telephone = '';
    } else {
      telephone = locations[i][2];
    }
    if (locations[i][3] == 'undefined') {
      email = '';
    } else {
      email = locations[i][3];
    }
    if (locations[i][4] == 'undefined') {
      web = '';
    } else {
      web = locations[i][4];
    }
    if (locations[i][7] == 'undefined') {
      markericon = '';
    } else {
      markericon = locations[i][7];
    }
    marker = new google.maps.Marker({
      icon: markericon,
      position: new google.maps.LatLng(locations[i][5], locations[i][6]),
      map: map,
      title: locations[i][0],
      desc: description,
      tel: telephone,
      email: email,
      web: web
    });
    link = '';
  }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm15bWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbXlNb2R1bGUgPSAoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICB2YXIgaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX3NldFVwTGlzdG5lcnMoKTtcclxuICB9O1xyXG5cclxuICB2YXIgX3NldFVwTGlzdG5lcnMgPSBmdW5jdGlvbigpIHtcclxuICAgICQoJy5sb2dpbi1idG4nKS5vbignY2xpY2snLCBfc2hvd0xvZ2luKTtcclxuICAgICQoJy5idG4taW5kZXgnKS5vbignY2xpY2snLCBfc2hvd0luZm8pO1xyXG4gICAgJCgnLmluZGV4Jykub24oJ2NsaWNrJywgX3Nob3dJbmZvKTtcclxuICAgICQoJy53cmFwcGVyLmJnJykub24oJ2NsaWNrJywgX2JhY2tncm91bmRDbGljayk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIF9zaG93TG9naW4gPSBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcuZmxpcCcpLnRvZ2dsZUNsYXNzKCdmbGlwcGluZycpO1xyXG4gICAgJCgnLmxvZ2luLWJ0bicpLmNzcyh7XHJcbiAgICAgICd2aXNpYmlsaXR5JzogJ2hpZGRlbidcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHZhciBfc2hvd0luZm8gPSBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcuZmxpcCcpLnJlbW92ZUNsYXNzKCdmbGlwcGluZycpO1xyXG4gICAgJCgnLmxvZ2luLWJ0bicpLmNzcyh7XHJcbiAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB2YXIgX2JhY2tncm91bmRDbGljayA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gJ3dyYXBwZXIgYmcnKSB7XHJcbiAgICAgICQoJy5mbGlwJykucmVtb3ZlQ2xhc3MoJ2ZsaXBwaW5nJyk7XHJcbiAgICAgICQoJy5sb2dpbi1idG4nKS5jc3Moe1xyXG4gICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0OiBpbml0XHJcbiAgfVxyXG59KSgpO1xyXG5cclxubXlNb2R1bGUuaW5pdCgpO1xyXG5cclxuLy/QodC80LXRidC10L3QuNC1IGJhY2tncm91bmRcclxuLy8gJChmdW5jdGlvbigpIHtcclxuLy8gICB2YXIgeCA9IDA7XHJcbi8vICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbi8vICAgICB4IC09IDE7XHJcbi8vICAgICAkKCcud3JhcHBlcicpLmNzcygnYmFja2dyb3VuZC1wb3NpdGlvbicsIHggKyAncHggMCcpO1xyXG4vLyAgIH0sIDUwKTtcclxuLy8gfSlcclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcblxyXG4gIChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY291bnRlciA9IDE7XHJcblxyXG4gICAgJCgnLnNsaWRlcl9fbGluay1yaWdodCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuIFxyXG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgIGNvbnRhaW5lciA9ICR0aGlzLmNsb3Nlc3QoJy5zbGlkZXJfX3JpZ2h0JyksXHJcbiAgICAgICAgaXRlbXMgPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faXRlbScpLFxyXG4gICAgICAgIGFjdGl2ZUl0ZW0gPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faXRlbS5hY3RpdmUnKTtcclxuXHJcblxyXG5cclxuICAgICAgaWYgKGNvdW50ZXIgPj0gaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgY291bnRlciA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciByZXFJdGVtID0gaXRlbXMuZXEoY291bnRlcik7XHJcblxyXG4gICAgICBhY3RpdmVJdGVtLmFuaW1hdGUoe1xyXG4gICAgICAgICdib3R0b20nIDogJzEwMCUnXHJcbiAgICAgIH0sIDMwMCk7XHJcblxyXG4gICAgICByZXFJdGVtLmFuaW1hdGUoe1xyXG4gICAgICAgICdib3R0b20nIDogJzAlJ1xyXG4gICAgICB9LCAzMDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5jc3MoJ2JvdHRvbScsICctMTAwJScpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvdW50ZXIrKztcclxuXHJcbiAgICB9KTtcclxuICB9KCkpO1xyXG5cclxuICBcclxuXHJcbiAgIFxyXG5cclxuXHJcbiAgXHJcbiAgLy/QnNC10LTQu9C10L3QvdGL0Lkg0YHQutGA0L7Qu9C7XHJcbiAgJCgnYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XHJcbiAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XHJcbiAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgJ10nKTtcclxuICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcclxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3BcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiI3BhZ2UtcHJlbG9hZGVyXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgJChcIi5iZ1wiKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG4gIH0sIDQwMDApO1xyXG5cclxuICAkKCcuY291bnRlcicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLnByb3AoJ0NvdW50ZXInLCAwKS5hbmltYXRlKHtcclxuICAgICAgQ291bnRlcjogJCh0aGlzKS50ZXh0KClcclxuICAgIH0sIHtcclxuICAgICAgZHVyYXRpb246IDQwMDAsXHJcbiAgICAgIGVhc2luZzogJ3N3aW5nJyxcclxuICAgICAgc3RlcDogZnVuY3Rpb24obm93KSB7XHJcbiAgICAgICAgJCh0aGlzKS50ZXh0KE1hdGguY2VpbChub3cpICsgJyUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8v0JzQtdC90Y4g0L3QsNCy0LjQs9Cw0YbQuNC4XHJcbiAgJCgnI25hdi1pY29uJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ292ZXJmbG93Jyk7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAkKCcjb3ZlcmxheScpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgfSk7XHJcblxyXG4gIC8vU2lkZWJhclxyXG4gICQoJy5zaWRlYmFyX19pbm5lcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5zaWRlYmFyJykudG9nZ2xlQ2xhc3MoJ3NpZGViYXJfX2FjdGl2ZScpO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgLy9TaWRlYmFyIGJsb2dcclxuICB2YXIgc2lkZWJhciA9ICQoJy5zaWRlYmFyX19pbm5lcicpO1xyXG4gIHZhciB0b3AgPSBzaWRlYmFyLm9mZnNldCgpLnRvcCAtIHBhcnNlRmxvYXQoc2lkZWJhci5jc3MoJ21hcmdpbi10b3AnKSk7XHJcblxyXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIHZhciB5ID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICAgIGlmICh5ID49IHRvcCkge1xyXG4gICAgICBzaWRlYmFyLmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2lkZWJhci5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG59KTtcclxuXHJcbiIsImdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBpbml0KTtcclxudmFyIG1hcDtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgdmFyIG1hcE9wdGlvbnMgPSB7XHJcbiAgICBjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTkuOTM3NDc1LCAzMC4zNTIyNDMpLFxyXG4gICAgem9vbTogMTUsXHJcbiAgICB6b29tQ29udHJvbDogZmFsc2UsXHJcbiAgICBkaXNhYmxlRG91YmxlQ2xpY2tab29tOiB0cnVlLFxyXG4gICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgc2NhbGVDb250cm9sOiBmYWxzZSxcclxuICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcclxuICAgIHBhbkNvbnRyb2w6IGZhbHNlLFxyXG4gICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxyXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgb3ZlcnZpZXdNYXBDb250cm9sOiBmYWxzZSxcclxuICAgIG92ZXJ2aWV3TWFwQ29udHJvbE9wdGlvbnM6IHtcclxuICAgICAgb3BlbmVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLFxyXG4gICAgc3R5bGVzOiBbe1xyXG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiM0NDQ0NDRcIlxyXG4gICAgICB9XVxyXG4gICAgfSwge1xyXG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmMmYyZjJcIlxyXG4gICAgICB9XVxyXG4gICAgfSwge1xyXG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgICBcInNhdHVyYXRpb25cIjogLTEwMFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgXCJsaWdodG5lc3NcIjogNDVcclxuICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIlxyXG4gICAgICB9XVxyXG4gICAgfSwge1xyXG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLmljb25cIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICB9XVxyXG4gICAgfSwge1xyXG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgICBcImNvbG9yXCI6IFwiI2VjYWU0NlwiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXHJcbiAgICAgIH1dXHJcbiAgICB9XSxcclxuICB9XHJcbiAgdmFyIG1hcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXltYXAnKTtcclxuICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChtYXBFbGVtZW50LCBtYXBPcHRpb25zKTtcclxuICB2YXIgbG9jYXRpb25zID0gW107XHJcbiAgZm9yIChpID0gMDsgaSA8IGxvY2F0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGxvY2F0aW9uc1tpXVsxXSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBkZXNjcmlwdGlvbiA9ICcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVzY3JpcHRpb24gPSBsb2NhdGlvbnNbaV1bMV07XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYXRpb25zW2ldWzJdID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRlbGVwaG9uZSA9ICcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGVsZXBob25lID0gbG9jYXRpb25zW2ldWzJdO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uc1tpXVszXSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBlbWFpbCA9ICcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZW1haWwgPSBsb2NhdGlvbnNbaV1bM107XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYXRpb25zW2ldWzRdID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHdlYiA9ICcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2ViID0gbG9jYXRpb25zW2ldWzRdO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uc1tpXVs3XSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBtYXJrZXJpY29uID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtYXJrZXJpY29uID0gbG9jYXRpb25zW2ldWzddO1xyXG4gICAgfVxyXG4gICAgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgIGljb246IG1hcmtlcmljb24sXHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxvY2F0aW9uc1tpXVs1XSwgbG9jYXRpb25zW2ldWzZdKSxcclxuICAgICAgbWFwOiBtYXAsXHJcbiAgICAgIHRpdGxlOiBsb2NhdGlvbnNbaV1bMF0sXHJcbiAgICAgIGRlc2M6IGRlc2NyaXB0aW9uLFxyXG4gICAgICB0ZWw6IHRlbGVwaG9uZSxcclxuICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICB3ZWI6IHdlYlxyXG4gICAgfSk7XHJcbiAgICBsaW5rID0gJyc7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
