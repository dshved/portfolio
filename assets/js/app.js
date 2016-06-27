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


  // (function() {
  //   var counter = 1;

  //   $('.slider__link-right').on('click', function(e) {
  //     e.preventDefault();


  //     var $this = $(this),
  //       container = $this.closest('.slider__right'),
  //       items = container.find('.slider__item'),
  //       activeItem = container.find('.slider__item.next');



  //     if (counter >= items.length) {
  //       counter = 0;
  //     }

  //     var reqItem = items.eq(counter);

  //     activeItem.animate({
  //       'top': '100%'
  //     }, 300);

  //     reqItem.animate({
  //       'top': '0%'
  //     }, 300, function() {
  //       activeItem.removeClass('next').css('top', '-100%');
  //       $(this).addClass('next');
  //     });

  //     counter++;

  //   });
  // }());

  // (function() {
  //   var counter = 1;

  //   $('.slider__link-left').on('click', function(e) {
  //     e.preventDefault();
  //     console.log('lol');
  //     var $this = $(this),
  //       container = $this.closest('.slider__left'),
  //       items = container.find('.slider__item'),
  //       activeItem = container.find('.slider__item.next');



  //     if (counter >= items.length) {
  //       counter = 0;
  //     }

  //     var reqItem = items.eq(counter);

  //     activeItem.animate({
  //       'bottom': '100%'
  //     }, 300);

  //     reqItem.animate({
  //       'bottom': '0%'
  //     }, 300, function() {
  //       activeItem.removeClass('next').css('bottom', '-100%');
  //       $(this).addClass('next');
  //     });

  //     counter++;

  //   });
  // }());






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
  $('.sidebar__inner').click(function() {
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

var Slider = (function() {
  var currentImg = 1;

  function init() {
    _setUpListners();
  }

  function _setUpListners() {
    $('.slider__link-right').on('click', _nextSlide);
    $('.slider__link-left').on('click', _prevSlide);
  }

  function _nextImg() {
    var container = $('.slider__next'),
      items = container.find('.slider__item'),
      activeItem = container.find('.slider__item.active');
    var reqItem = items.eq(currentImg - 2);

    activeItem.animate({
      'bottom': '100%'
    }, 300);

    reqItem.animate({
      'bottom': '0%'
    }, 300, function() {
      activeItem.removeClass('active').css('bottom', '-100%');
      $(this).addClass('active');
    });
  }

  function _prevImg() {
    var container = $('.slider__prev'),
      items = container.find('.slider__item'),
      activeItem = container.find('.slider__item.active');
    var reqItem = items.eq(currentImg - 2);

    activeItem.animate({
      'top': '100%'
    }, 300);
    reqItem.animate({
      'top': '0%'
    }, 300, function() {
      activeItem.removeClass('active').css('top', '-100%');
      $(this).addClass('active');
    });
  }

  function _nextSlide(e) {
    e.preventDefault();
    var bigSlide = $('.slider__center'),
      img = bigSlide.find('img');
    var container = $('.slider__next');
    var items = container.find('.slider__item'),
      activeItem = container.find('.slider__item.active');

    currentImg++;
    if (currentImg >= items.length) {
      currentImg = 0;
    }

    var reqItem = items.eq(currentImg),
      reqImg = items.eq(currentImg - 1).find('img');

    activeItem.animate({
      'bottom': '100%'
    }, 300);

    img.css({opacity: '0'});

    setTimeout(function(){
      img.attr('src', reqImg.attr('src'));
      img.css({
        opacity: '1',
        transition: 'all .3s'
      });
    },300);
    
    

    reqItem.animate({
      'bottom': '0%'
    }, 300, function() {
      activeItem.removeClass('active').css('bottom', '-100%');
      $(this).addClass('active');
    });
    _prevImg();
  }

  function _prevSlide(e) {
    e.preventDefault();
    var bigSlide = $('.slider__center'),
      img = bigSlide.find('img');
    var container = $('.slider__prev');
    var items = container.find('.slider__item'),
      activeItem = container.find('.slider__item.active');

    currentImg--;
    var reqItem = items.eq(currentImg),
      reqImg = items.eq(currentImg + 1).find('img');
    if (currentImg < 0) {
      currentImg = items.length - 1;
    }

    activeItem.animate({
      'top': '100%'
    }, 300);

    img.css({opacity: '0'});

    setTimeout(function(){
      img.attr('src', reqImg.attr('src'));
      img.css({
        opacity: '1',
        transition: 'all .3s'
      });
    },300);

    reqItem.animate({
      'top': '0%'
    }, 300, function() {
      activeItem.removeClass('active').css('top', '-100%');
      $(this).addClass('active');
    });
    _nextImg();
  }

  return {
    init: init
  }
})();

Slider.init();

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm15bWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG15TW9kdWxlID0gKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgdmFyIGluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIF9zZXRVcExpc3RuZXJzKCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIF9zZXRVcExpc3RuZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcubG9naW4tYnRuJykub24oJ2NsaWNrJywgX3Nob3dMb2dpbik7XHJcbiAgICAkKCcuYnRuLWluZGV4Jykub24oJ2NsaWNrJywgX3Nob3dJbmZvKTtcclxuICAgICQoJy5pbmRleCcpLm9uKCdjbGljaycsIF9zaG93SW5mbyk7XHJcbiAgICAkKCcud3JhcHBlci5iZycpLm9uKCdjbGljaycsIF9iYWNrZ3JvdW5kQ2xpY2spO1xyXG4gIH07XHJcblxyXG4gIHZhciBfc2hvd0xvZ2luID0gZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLmZsaXAnKS50b2dnbGVDbGFzcygnZmxpcHBpbmcnKTtcclxuICAgICQoJy5sb2dpbi1idG4nKS5jc3Moe1xyXG4gICAgICAndmlzaWJpbGl0eSc6ICdoaWRkZW4nXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB2YXIgX3Nob3dJbmZvID0gZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLmZsaXAnKS5yZW1vdmVDbGFzcygnZmxpcHBpbmcnKTtcclxuICAgICQoJy5sb2dpbi1idG4nKS5jc3Moe1xyXG4gICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJ1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIF9iYWNrZ3JvdW5kQ2xpY2sgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09ICd3cmFwcGVyIGJnJykge1xyXG4gICAgICAkKCcuZmxpcCcpLnJlbW92ZUNsYXNzKCdmbGlwcGluZycpO1xyXG4gICAgICAkKCcubG9naW4tYnRuJykuY3NzKHtcclxuICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5pdDogaW5pdFxyXG4gIH1cclxufSkoKTtcclxuXHJcbm15TW9kdWxlLmluaXQoKTtcclxuXHJcbi8v0KHQvNC10YnQtdC90LjQtSBiYWNrZ3JvdW5kXHJcbi8vICQoZnVuY3Rpb24oKSB7XHJcbi8vICAgdmFyIHggPSAwO1xyXG4vLyAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgeCAtPSAxO1xyXG4vLyAgICAgJCgnLndyYXBwZXInKS5jc3MoJ2JhY2tncm91bmQtcG9zaXRpb24nLCB4ICsgJ3B4IDAnKTtcclxuLy8gICB9LCA1MCk7XHJcbi8vIH0pXHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG5cclxuICAvLyAoZnVuY3Rpb24oKSB7XHJcbiAgLy8gICB2YXIgY291bnRlciA9IDE7XHJcblxyXG4gIC8vICAgJCgnLnNsaWRlcl9fbGluay1yaWdodCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcbiAgLy8gICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgLy8gICAgICAgY29udGFpbmVyID0gJHRoaXMuY2xvc2VzdCgnLnNsaWRlcl9fcmlnaHQnKSxcclxuICAvLyAgICAgICBpdGVtcyA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX19pdGVtJyksXHJcbiAgLy8gICAgICAgYWN0aXZlSXRlbSA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX19pdGVtLm5leHQnKTtcclxuXHJcblxyXG5cclxuICAvLyAgICAgaWYgKGNvdW50ZXIgPj0gaXRlbXMubGVuZ3RoKSB7XHJcbiAgLy8gICAgICAgY291bnRlciA9IDA7XHJcbiAgLy8gICAgIH1cclxuXHJcbiAgLy8gICAgIHZhciByZXFJdGVtID0gaXRlbXMuZXEoY291bnRlcik7XHJcblxyXG4gIC8vICAgICBhY3RpdmVJdGVtLmFuaW1hdGUoe1xyXG4gIC8vICAgICAgICd0b3AnOiAnMTAwJSdcclxuICAvLyAgICAgfSwgMzAwKTtcclxuXHJcbiAgLy8gICAgIHJlcUl0ZW0uYW5pbWF0ZSh7XHJcbiAgLy8gICAgICAgJ3RvcCc6ICcwJSdcclxuICAvLyAgICAgfSwgMzAwLCBmdW5jdGlvbigpIHtcclxuICAvLyAgICAgICBhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKCduZXh0JykuY3NzKCd0b3AnLCAnLTEwMCUnKTtcclxuICAvLyAgICAgICAkKHRoaXMpLmFkZENsYXNzKCduZXh0Jyk7XHJcbiAgLy8gICAgIH0pO1xyXG5cclxuICAvLyAgICAgY291bnRlcisrO1xyXG5cclxuICAvLyAgIH0pO1xyXG4gIC8vIH0oKSk7XHJcblxyXG4gIC8vIChmdW5jdGlvbigpIHtcclxuICAvLyAgIHZhciBjb3VudGVyID0gMTtcclxuXHJcbiAgLy8gICAkKCcuc2xpZGVyX19saW5rLWxlZnQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAvLyAgICAgY29uc29sZS5sb2coJ2xvbCcpO1xyXG4gIC8vICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gIC8vICAgICAgIGNvbnRhaW5lciA9ICR0aGlzLmNsb3Nlc3QoJy5zbGlkZXJfX2xlZnQnKSxcclxuICAvLyAgICAgICBpdGVtcyA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX19pdGVtJyksXHJcbiAgLy8gICAgICAgYWN0aXZlSXRlbSA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX19pdGVtLm5leHQnKTtcclxuXHJcblxyXG5cclxuICAvLyAgICAgaWYgKGNvdW50ZXIgPj0gaXRlbXMubGVuZ3RoKSB7XHJcbiAgLy8gICAgICAgY291bnRlciA9IDA7XHJcbiAgLy8gICAgIH1cclxuXHJcbiAgLy8gICAgIHZhciByZXFJdGVtID0gaXRlbXMuZXEoY291bnRlcik7XHJcblxyXG4gIC8vICAgICBhY3RpdmVJdGVtLmFuaW1hdGUoe1xyXG4gIC8vICAgICAgICdib3R0b20nOiAnMTAwJSdcclxuICAvLyAgICAgfSwgMzAwKTtcclxuXHJcbiAgLy8gICAgIHJlcUl0ZW0uYW5pbWF0ZSh7XHJcbiAgLy8gICAgICAgJ2JvdHRvbSc6ICcwJSdcclxuICAvLyAgICAgfSwgMzAwLCBmdW5jdGlvbigpIHtcclxuICAvLyAgICAgICBhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKCduZXh0JykuY3NzKCdib3R0b20nLCAnLTEwMCUnKTtcclxuICAvLyAgICAgICAkKHRoaXMpLmFkZENsYXNzKCduZXh0Jyk7XHJcbiAgLy8gICAgIH0pO1xyXG5cclxuICAvLyAgICAgY291bnRlcisrO1xyXG5cclxuICAvLyAgIH0pO1xyXG4gIC8vIH0oKSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy/QnNC10LTQu9C10L3QvdGL0Lkg0YHQutGA0L7Qu9C7XHJcbiAgJCgnYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XHJcbiAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XHJcbiAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgJ10nKTtcclxuICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcclxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3BcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiI3BhZ2UtcHJlbG9hZGVyXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgJChcIi5iZ1wiKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG4gIH0sIDQwMDApO1xyXG5cclxuICAkKCcuY291bnRlcicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLnByb3AoJ0NvdW50ZXInLCAwKS5hbmltYXRlKHtcclxuICAgICAgQ291bnRlcjogJCh0aGlzKS50ZXh0KClcclxuICAgIH0sIHtcclxuICAgICAgZHVyYXRpb246IDQwMDAsXHJcbiAgICAgIGVhc2luZzogJ3N3aW5nJyxcclxuICAgICAgc3RlcDogZnVuY3Rpb24obm93KSB7XHJcbiAgICAgICAgJCh0aGlzKS50ZXh0KE1hdGguY2VpbChub3cpICsgJyUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8v0JzQtdC90Y4g0L3QsNCy0LjQs9Cw0YbQuNC4XHJcbiAgJCgnI25hdi1pY29uJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ292ZXJmbG93Jyk7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAkKCcjb3ZlcmxheScpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgfSk7XHJcblxyXG4gIC8vU2lkZWJhclxyXG4gICQoJy5zaWRlYmFyX19pbm5lcicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnNpZGViYXInKS50b2dnbGVDbGFzcygnc2lkZWJhcl9fYWN0aXZlJyk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAvL1NpZGViYXIgYmxvZ1xyXG4gIHZhciBzaWRlYmFyID0gJCgnLnNpZGViYXJfX2lubmVyJyk7XHJcbiAgdmFyIHRvcCA9IHNpZGViYXIub2Zmc2V0KCkudG9wIC0gcGFyc2VGbG9hdChzaWRlYmFyLmNzcygnbWFyZ2luLXRvcCcpKTtcclxuXHJcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbihldmVudCkge1xyXG4gICAgdmFyIHkgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG4gICAgaWYgKHkgPj0gdG9wKSB7XHJcbiAgICAgIHNpZGViYXIuYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaWRlYmFyLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcbn0pO1xyXG5cclxudmFyIFNsaWRlciA9IChmdW5jdGlvbigpIHtcclxuICB2YXIgY3VycmVudEltZyA9IDE7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBfc2V0VXBMaXN0bmVycygpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3NldFVwTGlzdG5lcnMoKSB7XHJcbiAgICAkKCcuc2xpZGVyX19saW5rLXJpZ2h0Jykub24oJ2NsaWNrJywgX25leHRTbGlkZSk7XHJcbiAgICAkKCcuc2xpZGVyX19saW5rLWxlZnQnKS5vbignY2xpY2snLCBfcHJldlNsaWRlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9uZXh0SW1nKCkge1xyXG4gICAgdmFyIGNvbnRhaW5lciA9ICQoJy5zbGlkZXJfX25leHQnKSxcclxuICAgICAgaXRlbXMgPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faXRlbScpLFxyXG4gICAgICBhY3RpdmVJdGVtID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfX2l0ZW0uYWN0aXZlJyk7XHJcbiAgICB2YXIgcmVxSXRlbSA9IGl0ZW1zLmVxKGN1cnJlbnRJbWcgLSAyKTtcclxuXHJcbiAgICBhY3RpdmVJdGVtLmFuaW1hdGUoe1xyXG4gICAgICAnYm90dG9tJzogJzEwMCUnXHJcbiAgICB9LCAzMDApO1xyXG5cclxuICAgIHJlcUl0ZW0uYW5pbWF0ZSh7XHJcbiAgICAgICdib3R0b20nOiAnMCUnXHJcbiAgICB9LCAzMDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5jc3MoJ2JvdHRvbScsICctMTAwJScpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3ByZXZJbWcoKSB7XHJcbiAgICB2YXIgY29udGFpbmVyID0gJCgnLnNsaWRlcl9fcHJldicpLFxyXG4gICAgICBpdGVtcyA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX19pdGVtJyksXHJcbiAgICAgIGFjdGl2ZUl0ZW0gPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faXRlbS5hY3RpdmUnKTtcclxuICAgIHZhciByZXFJdGVtID0gaXRlbXMuZXEoY3VycmVudEltZyAtIDIpO1xyXG5cclxuICAgIGFjdGl2ZUl0ZW0uYW5pbWF0ZSh7XHJcbiAgICAgICd0b3AnOiAnMTAwJSdcclxuICAgIH0sIDMwMCk7XHJcbiAgICByZXFJdGVtLmFuaW1hdGUoe1xyXG4gICAgICAndG9wJzogJzAlJ1xyXG4gICAgfSwgMzAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgYWN0aXZlSXRlbS5yZW1vdmVDbGFzcygnYWN0aXZlJykuY3NzKCd0b3AnLCAnLTEwMCUnKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9uZXh0U2xpZGUoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGJpZ1NsaWRlID0gJCgnLnNsaWRlcl9fY2VudGVyJyksXHJcbiAgICAgIGltZyA9IGJpZ1NsaWRlLmZpbmQoJ2ltZycpO1xyXG4gICAgdmFyIGNvbnRhaW5lciA9ICQoJy5zbGlkZXJfX25leHQnKTtcclxuICAgIHZhciBpdGVtcyA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX19pdGVtJyksXHJcbiAgICAgIGFjdGl2ZUl0ZW0gPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faXRlbS5hY3RpdmUnKTtcclxuXHJcbiAgICBjdXJyZW50SW1nKys7XHJcbiAgICBpZiAoY3VycmVudEltZyA+PSBpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgY3VycmVudEltZyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlcUl0ZW0gPSBpdGVtcy5lcShjdXJyZW50SW1nKSxcclxuICAgICAgcmVxSW1nID0gaXRlbXMuZXEoY3VycmVudEltZyAtIDEpLmZpbmQoJ2ltZycpO1xyXG5cclxuICAgIGFjdGl2ZUl0ZW0uYW5pbWF0ZSh7XHJcbiAgICAgICdib3R0b20nOiAnMTAwJSdcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgaW1nLmNzcyh7b3BhY2l0eTogJzAnfSk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICBpbWcuYXR0cignc3JjJywgcmVxSW1nLmF0dHIoJ3NyYycpKTtcclxuICAgICAgaW1nLmNzcyh7XHJcbiAgICAgICAgb3BhY2l0eTogJzEnLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgLjNzJ1xyXG4gICAgICB9KTtcclxuICAgIH0sMzAwKTtcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgcmVxSXRlbS5hbmltYXRlKHtcclxuICAgICAgJ2JvdHRvbSc6ICcwJSdcclxuICAgIH0sIDMwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmNzcygnYm90dG9tJywgJy0xMDAlJyk7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgICBfcHJldkltZygpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3ByZXZTbGlkZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgYmlnU2xpZGUgPSAkKCcuc2xpZGVyX19jZW50ZXInKSxcclxuICAgICAgaW1nID0gYmlnU2xpZGUuZmluZCgnaW1nJyk7XHJcbiAgICB2YXIgY29udGFpbmVyID0gJCgnLnNsaWRlcl9fcHJldicpO1xyXG4gICAgdmFyIGl0ZW1zID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfX2l0ZW0nKSxcclxuICAgICAgYWN0aXZlSXRlbSA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX19pdGVtLmFjdGl2ZScpO1xyXG5cclxuICAgIGN1cnJlbnRJbWctLTtcclxuICAgIHZhciByZXFJdGVtID0gaXRlbXMuZXEoY3VycmVudEltZyksXHJcbiAgICAgIHJlcUltZyA9IGl0ZW1zLmVxKGN1cnJlbnRJbWcgKyAxKS5maW5kKCdpbWcnKTtcclxuICAgIGlmIChjdXJyZW50SW1nIDwgMCkge1xyXG4gICAgICBjdXJyZW50SW1nID0gaXRlbXMubGVuZ3RoIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmVJdGVtLmFuaW1hdGUoe1xyXG4gICAgICAndG9wJzogJzEwMCUnXHJcbiAgICB9LCAzMDApO1xyXG5cclxuICAgIGltZy5jc3Moe29wYWNpdHk6ICcwJ30pO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgaW1nLmF0dHIoJ3NyYycsIHJlcUltZy5hdHRyKCdzcmMnKSk7XHJcbiAgICAgIGltZy5jc3Moe1xyXG4gICAgICAgIG9wYWNpdHk6ICcxJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIC4zcydcclxuICAgICAgfSk7XHJcbiAgICB9LDMwMCk7XHJcblxyXG4gICAgcmVxSXRlbS5hbmltYXRlKHtcclxuICAgICAgJ3RvcCc6ICcwJSdcclxuICAgIH0sIDMwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmNzcygndG9wJywgJy0xMDAlJyk7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgICBfbmV4dEltZygpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQ6IGluaXRcclxuICB9XHJcbn0pKCk7XHJcblxyXG5TbGlkZXIuaW5pdCgpO1xyXG4iLCJnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgaW5pdCk7XHJcbnZhciBtYXA7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIHZhciBtYXBPcHRpb25zID0ge1xyXG4gICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDU5LjkzNzQ3NSwgMzAuMzUyMjQzKSxcclxuICAgIHpvb206IDE1LFxyXG4gICAgem9vbUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgZGlzYWJsZURvdWJsZUNsaWNrWm9vbTogdHJ1ZSxcclxuICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuICAgIHNjYWxlQ29udHJvbDogZmFsc2UsXHJcbiAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICBwYW5Db250cm9sOiBmYWxzZSxcclxuICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgIG92ZXJ2aWV3TWFwQ29udHJvbDogZmFsc2UsXHJcbiAgICBvdmVydmlld01hcENvbnRyb2xPcHRpb25zOiB7XHJcbiAgICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCxcclxuICAgIHN0eWxlczogW3tcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjNDQ0NDQ0XCJcclxuICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjZjJmMmYyXCJcclxuICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgXCJzYXR1cmF0aW9uXCI6IC0xMDBcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDQ1XHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcclxuICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiNlY2FlNDZcIlxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxyXG4gICAgICB9XVxyXG4gICAgfV0sXHJcbiAgfVxyXG4gIHZhciBtYXBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215bWFwJyk7XHJcbiAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwRWxlbWVudCwgbWFwT3B0aW9ucyk7XHJcbiAgdmFyIGxvY2F0aW9ucyA9IFtdO1xyXG4gIGZvciAoaSA9IDA7IGkgPCBsb2NhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChsb2NhdGlvbnNbaV1bMV0gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgZGVzY3JpcHRpb24gPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uID0gbG9jYXRpb25zW2ldWzFdO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uc1tpXVsyXSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0ZWxlcGhvbmUgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRlbGVwaG9uZSA9IGxvY2F0aW9uc1tpXVsyXTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbnNbaV1bM10gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgZW1haWwgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVtYWlsID0gbG9jYXRpb25zW2ldWzNdO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uc1tpXVs0XSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB3ZWIgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdlYiA9IGxvY2F0aW9uc1tpXVs0XTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbnNbaV1bN10gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgbWFya2VyaWNvbiA9ICcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWFya2VyaWNvbiA9IGxvY2F0aW9uc1tpXVs3XTtcclxuICAgIH1cclxuICAgIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICBpY29uOiBtYXJrZXJpY29uLFxyXG4gICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsb2NhdGlvbnNbaV1bNV0sIGxvY2F0aW9uc1tpXVs2XSksXHJcbiAgICAgIG1hcDogbWFwLFxyXG4gICAgICB0aXRsZTogbG9jYXRpb25zW2ldWzBdLFxyXG4gICAgICBkZXNjOiBkZXNjcmlwdGlvbixcclxuICAgICAgdGVsOiB0ZWxlcGhvbmUsXHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgd2ViOiB3ZWJcclxuICAgIH0pO1xyXG4gICAgbGluayA9ICcnO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
