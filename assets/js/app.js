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

  $('.tabs__control-link').on('click', function(e){
    e.preventDefault();
    var item = $(this).closest('.tabs__controls-item'),
        contentItem = $('.tabs__item'),
        itemPosition = item.index();
    contentItem.eq(itemPosition)
      .add(item)
      .addClass('active')
      .siblings()
      .removeClass('active');
  });







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

  //Spinner
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


//Slider Module
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

    img.css({ opacity: '0' });

    setTimeout(function() {
      img.attr('src', reqImg.attr('src'));
      img.css({
        opacity: '1',
        transition: 'all .3s'
      });
    }, 300);



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

    img.css({ opacity: '0' });

    setTimeout(function() {
      img.attr('src', reqImg.attr('src'));
      img.css({
        opacity: '1',
        transition: 'all .3s'
      });
    }, 300);

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


//validation
var validateForm = (function() {

  function init() {
    _setUpListners();
  }

  function _setUpListners() {
    $('#auth').submit(_Auth);
    $('#user_human').click(_check);
  }

  function _check() {

    if ($(this).is(':checked')) {
      $('#human_yes').prop("disabled", false);
      $('#human_no').prop("disabled", false);
    } else {
      $('#human_yes').prop("disabled", true);
      $('#human_no').prop("disabled", true);
    }

  }

  function _validateForm() {
    var $this = $('#auth'),
      user_human = $this.find('#user_human'),
      human_yes = $this.find('#human_yes'),
      valid = true;
    if (!user_human.prop('checked')) {
      valid = false;
    }
    if (!human_yes.prop('checked')) {
      valid = false;
    }
    return valid;


  }

  function _Auth(e) {
    e.preventDefault();
    var form = $('#auth');
    if (_validateForm()) {
      location.href = 'admin.html';
      // username = $("#user_login").val();
      // password = $("#user_pass").val();

      // $.ajax({
      //   type: "POST",
      //   url: "/login",
      //   data: "name=" + username + "&pass=" + password,
      //   success: function(html) {
      //     console.log(data);
      //   }
      // });
    } else {
      alert('Ошибка!');
    }
  }


  return {
    init: init
  }
})();

validateForm.init();

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm15bWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdFZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbXlNb2R1bGUgPSAoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICB2YXIgaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX3NldFVwTGlzdG5lcnMoKTtcclxuICB9O1xyXG5cclxuICB2YXIgX3NldFVwTGlzdG5lcnMgPSBmdW5jdGlvbigpIHtcclxuICAgICQoJy5sb2dpbi1idG4nKS5vbignY2xpY2snLCBfc2hvd0xvZ2luKTtcclxuICAgICQoJy5idG4taW5kZXgnKS5vbignY2xpY2snLCBfc2hvd0luZm8pO1xyXG4gICAgJCgnLmluZGV4Jykub24oJ2NsaWNrJywgX3Nob3dJbmZvKTtcclxuICAgICQoJy53cmFwcGVyLmJnJykub24oJ2NsaWNrJywgX2JhY2tncm91bmRDbGljayk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIF9zaG93TG9naW4gPSBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcuZmxpcCcpLnRvZ2dsZUNsYXNzKCdmbGlwcGluZycpO1xyXG4gICAgJCgnLmxvZ2luLWJ0bicpLmNzcyh7XHJcbiAgICAgICd2aXNpYmlsaXR5JzogJ2hpZGRlbidcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHZhciBfc2hvd0luZm8gPSBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcuZmxpcCcpLnJlbW92ZUNsYXNzKCdmbGlwcGluZycpO1xyXG4gICAgJCgnLmxvZ2luLWJ0bicpLmNzcyh7XHJcbiAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB2YXIgX2JhY2tncm91bmRDbGljayA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gJ3dyYXBwZXIgYmcnKSB7XHJcbiAgICAgICQoJy5mbGlwJykucmVtb3ZlQ2xhc3MoJ2ZsaXBwaW5nJyk7XHJcbiAgICAgICQoJy5sb2dpbi1idG4nKS5jc3Moe1xyXG4gICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0OiBpbml0XHJcbiAgfVxyXG59KSgpO1xyXG5cclxubXlNb2R1bGUuaW5pdCgpO1xyXG5cclxuLy/QodC80LXRidC10L3QuNC1IGJhY2tncm91bmRcclxuLy8gJChmdW5jdGlvbigpIHtcclxuLy8gICB2YXIgeCA9IDA7XHJcbi8vICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbi8vICAgICB4IC09IDE7XHJcbi8vICAgICAkKCcud3JhcHBlcicpLmNzcygnYmFja2dyb3VuZC1wb3NpdGlvbicsIHggKyAncHggMCcpO1xyXG4vLyAgIH0sIDUwKTtcclxuLy8gfSlcclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgJCgnLnRhYnNfX2NvbnRyb2wtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGl0ZW0gPSAkKHRoaXMpLmNsb3Nlc3QoJy50YWJzX19jb250cm9scy1pdGVtJyksXHJcbiAgICAgICAgY29udGVudEl0ZW0gPSAkKCcudGFic19faXRlbScpLFxyXG4gICAgICAgIGl0ZW1Qb3NpdGlvbiA9IGl0ZW0uaW5kZXgoKTtcclxuICAgIGNvbnRlbnRJdGVtLmVxKGl0ZW1Qb3NpdGlvbilcclxuICAgICAgLmFkZChpdGVtKVxyXG4gICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgIC5zaWJsaW5ncygpXHJcbiAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8v0JzQtdC00LvQtdC90L3Ri9C5INGB0LrRgNC+0LvQu1xyXG4gICQoJ2FbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xyXG4gICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xyXG4gICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArICddJyk7XHJcbiAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vU3Bpbm5lclxyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiI3BhZ2UtcHJlbG9hZGVyXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgJChcIi5iZ1wiKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG4gIH0sIDQwMDApO1xyXG5cclxuICAkKCcuY291bnRlcicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLnByb3AoJ0NvdW50ZXInLCAwKS5hbmltYXRlKHtcclxuICAgICAgQ291bnRlcjogJCh0aGlzKS50ZXh0KClcclxuICAgIH0sIHtcclxuICAgICAgZHVyYXRpb246IDQwMDAsXHJcbiAgICAgIGVhc2luZzogJ3N3aW5nJyxcclxuICAgICAgc3RlcDogZnVuY3Rpb24obm93KSB7XHJcbiAgICAgICAgJCh0aGlzKS50ZXh0KE1hdGguY2VpbChub3cpICsgJyUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8v0JzQtdC90Y4g0L3QsNCy0LjQs9Cw0YbQuNC4XHJcbiAgJCgnI25hdi1pY29uJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ292ZXJmbG93Jyk7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAkKCcjb3ZlcmxheScpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgfSk7XHJcblxyXG4gIC8vU2lkZWJhclxyXG4gICQoJy5zaWRlYmFyX19pbm5lcicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnNpZGViYXInKS50b2dnbGVDbGFzcygnc2lkZWJhcl9fYWN0aXZlJyk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAvL1NpZGViYXIgYmxvZ1xyXG4gIHZhciBzaWRlYmFyID0gJCgnLnNpZGViYXJfX2lubmVyJyk7XHJcbiAgdmFyIHRvcCA9IHNpZGViYXIub2Zmc2V0KCkudG9wIC0gcGFyc2VGbG9hdChzaWRlYmFyLmNzcygnbWFyZ2luLXRvcCcpKTtcclxuXHJcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbihldmVudCkge1xyXG4gICAgdmFyIHkgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG4gICAgaWYgKHkgPj0gdG9wKSB7XHJcbiAgICAgIHNpZGViYXIuYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaWRlYmFyLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcbi8vU2xpZGVyIE1vZHVsZVxyXG52YXIgU2xpZGVyID0gKGZ1bmN0aW9uKCkge1xyXG4gIHZhciBjdXJyZW50SW1nID0gMTtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIF9zZXRVcExpc3RuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfc2V0VXBMaXN0bmVycygpIHtcclxuICAgICQoJy5zbGlkZXJfX2xpbmstcmlnaHQnKS5vbignY2xpY2snLCBfbmV4dFNsaWRlKTtcclxuICAgICQoJy5zbGlkZXJfX2xpbmstbGVmdCcpLm9uKCdjbGljaycsIF9wcmV2U2xpZGUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX25leHRJbWcoKSB7XHJcbiAgICB2YXIgY29udGFpbmVyID0gJCgnLnNsaWRlcl9fbmV4dCcpLFxyXG4gICAgICBpdGVtcyA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX19pdGVtJyksXHJcbiAgICAgIGFjdGl2ZUl0ZW0gPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faXRlbS5hY3RpdmUnKTtcclxuICAgIHZhciByZXFJdGVtID0gaXRlbXMuZXEoY3VycmVudEltZyAtIDIpO1xyXG5cclxuICAgIGFjdGl2ZUl0ZW0uYW5pbWF0ZSh7XHJcbiAgICAgICdib3R0b20nOiAnMTAwJSdcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgcmVxSXRlbS5hbmltYXRlKHtcclxuICAgICAgJ2JvdHRvbSc6ICcwJSdcclxuICAgIH0sIDMwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmNzcygnYm90dG9tJywgJy0xMDAlJyk7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfcHJldkltZygpIHtcclxuICAgIHZhciBjb250YWluZXIgPSAkKCcuc2xpZGVyX19wcmV2JyksXHJcbiAgICAgIGl0ZW1zID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfX2l0ZW0nKSxcclxuICAgICAgYWN0aXZlSXRlbSA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX19pdGVtLmFjdGl2ZScpO1xyXG4gICAgdmFyIHJlcUl0ZW0gPSBpdGVtcy5lcShjdXJyZW50SW1nIC0gMik7XHJcblxyXG4gICAgYWN0aXZlSXRlbS5hbmltYXRlKHtcclxuICAgICAgJ3RvcCc6ICcxMDAlJ1xyXG4gICAgfSwgMzAwKTtcclxuICAgIHJlcUl0ZW0uYW5pbWF0ZSh7XHJcbiAgICAgICd0b3AnOiAnMCUnXHJcbiAgICB9LCAzMDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5jc3MoJ3RvcCcsICctMTAwJScpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX25leHRTbGlkZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgYmlnU2xpZGUgPSAkKCcuc2xpZGVyX19jZW50ZXInKSxcclxuICAgICAgaW1nID0gYmlnU2xpZGUuZmluZCgnaW1nJyk7XHJcbiAgICB2YXIgY29udGFpbmVyID0gJCgnLnNsaWRlcl9fbmV4dCcpO1xyXG4gICAgdmFyIGl0ZW1zID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfX2l0ZW0nKSxcclxuICAgICAgYWN0aXZlSXRlbSA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX19pdGVtLmFjdGl2ZScpO1xyXG5cclxuICAgIGN1cnJlbnRJbWcrKztcclxuICAgIGlmIChjdXJyZW50SW1nID49IGl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICBjdXJyZW50SW1nID0gMDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVxSXRlbSA9IGl0ZW1zLmVxKGN1cnJlbnRJbWcpLFxyXG4gICAgICByZXFJbWcgPSBpdGVtcy5lcShjdXJyZW50SW1nIC0gMSkuZmluZCgnaW1nJyk7XHJcblxyXG4gICAgYWN0aXZlSXRlbS5hbmltYXRlKHtcclxuICAgICAgJ2JvdHRvbSc6ICcxMDAlJ1xyXG4gICAgfSwgMzAwKTtcclxuXHJcbiAgICBpbWcuY3NzKHsgb3BhY2l0eTogJzAnIH0pO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGltZy5hdHRyKCdzcmMnLCByZXFJbWcuYXR0cignc3JjJykpO1xyXG4gICAgICBpbWcuY3NzKHtcclxuICAgICAgICBvcGFjaXR5OiAnMScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAuM3MnXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMzAwKTtcclxuXHJcblxyXG5cclxuICAgIHJlcUl0ZW0uYW5pbWF0ZSh7XHJcbiAgICAgICdib3R0b20nOiAnMCUnXHJcbiAgICB9LCAzMDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5jc3MoJ2JvdHRvbScsICctMTAwJScpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgX3ByZXZJbWcoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9wcmV2U2xpZGUoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGJpZ1NsaWRlID0gJCgnLnNsaWRlcl9fY2VudGVyJyksXHJcbiAgICAgIGltZyA9IGJpZ1NsaWRlLmZpbmQoJ2ltZycpO1xyXG4gICAgdmFyIGNvbnRhaW5lciA9ICQoJy5zbGlkZXJfX3ByZXYnKTtcclxuICAgIHZhciBpdGVtcyA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX19pdGVtJyksXHJcbiAgICAgIGFjdGl2ZUl0ZW0gPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faXRlbS5hY3RpdmUnKTtcclxuXHJcbiAgICBjdXJyZW50SW1nLS07XHJcbiAgICB2YXIgcmVxSXRlbSA9IGl0ZW1zLmVxKGN1cnJlbnRJbWcpLFxyXG4gICAgICByZXFJbWcgPSBpdGVtcy5lcShjdXJyZW50SW1nICsgMSkuZmluZCgnaW1nJyk7XHJcbiAgICBpZiAoY3VycmVudEltZyA8IDApIHtcclxuICAgICAgY3VycmVudEltZyA9IGl0ZW1zLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZlSXRlbS5hbmltYXRlKHtcclxuICAgICAgJ3RvcCc6ICcxMDAlJ1xyXG4gICAgfSwgMzAwKTtcclxuXHJcbiAgICBpbWcuY3NzKHsgb3BhY2l0eTogJzAnIH0pO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGltZy5hdHRyKCdzcmMnLCByZXFJbWcuYXR0cignc3JjJykpO1xyXG4gICAgICBpbWcuY3NzKHtcclxuICAgICAgICBvcGFjaXR5OiAnMScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAuM3MnXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMzAwKTtcclxuXHJcbiAgICByZXFJdGVtLmFuaW1hdGUoe1xyXG4gICAgICAndG9wJzogJzAlJ1xyXG4gICAgfSwgMzAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgYWN0aXZlSXRlbS5yZW1vdmVDbGFzcygnYWN0aXZlJykuY3NzKCd0b3AnLCAnLTEwMCUnKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgIF9uZXh0SW1nKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5pdDogaW5pdFxyXG4gIH1cclxufSkoKTtcclxuXHJcblNsaWRlci5pbml0KCk7XHJcblxyXG5cclxuLy92YWxpZGF0aW9uXHJcbnZhciB2YWxpZGF0ZUZvcm0gPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBfc2V0VXBMaXN0bmVycygpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3NldFVwTGlzdG5lcnMoKSB7XHJcbiAgICAkKCcjYXV0aCcpLnN1Ym1pdChfQXV0aCk7XHJcbiAgICAkKCcjdXNlcl9odW1hbicpLmNsaWNrKF9jaGVjayk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfY2hlY2soKSB7XHJcblxyXG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgJCgnI2h1bWFuX3llcycpLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICQoJyNodW1hbl9ubycpLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjaHVtYW5feWVzJykucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAkKCcjaHVtYW5fbm8nKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3ZhbGlkYXRlRm9ybSgpIHtcclxuICAgIHZhciAkdGhpcyA9ICQoJyNhdXRoJyksXHJcbiAgICAgIHVzZXJfaHVtYW4gPSAkdGhpcy5maW5kKCcjdXNlcl9odW1hbicpLFxyXG4gICAgICBodW1hbl95ZXMgPSAkdGhpcy5maW5kKCcjaHVtYW5feWVzJyksXHJcbiAgICAgIHZhbGlkID0gdHJ1ZTtcclxuICAgIGlmICghdXNlcl9odW1hbi5wcm9wKCdjaGVja2VkJykpIHtcclxuICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICghaHVtYW5feWVzLnByb3AoJ2NoZWNrZWQnKSkge1xyXG4gICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbGlkO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfQXV0aChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgZm9ybSA9ICQoJyNhdXRoJyk7XHJcbiAgICBpZiAoX3ZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSAnYWRtaW4uaHRtbCc7XHJcbiAgICAgIC8vIHVzZXJuYW1lID0gJChcIiN1c2VyX2xvZ2luXCIpLnZhbCgpO1xyXG4gICAgICAvLyBwYXNzd29yZCA9ICQoXCIjdXNlcl9wYXNzXCIpLnZhbCgpO1xyXG5cclxuICAgICAgLy8gJC5hamF4KHtcclxuICAgICAgLy8gICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgLy8gICB1cmw6IFwiL2xvZ2luXCIsXHJcbiAgICAgIC8vICAgZGF0YTogXCJuYW1lPVwiICsgdXNlcm5hbWUgKyBcIiZwYXNzPVwiICsgcGFzc3dvcmQsXHJcbiAgICAgIC8vICAgc3VjY2VzczogZnVuY3Rpb24oaHRtbCkge1xyXG4gICAgICAvLyAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KCfQntGI0LjQsdC60LAhJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQ6IGluaXRcclxuICB9XHJcbn0pKCk7XHJcblxyXG52YWxpZGF0ZUZvcm0uaW5pdCgpO1xyXG4iLCJnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgaW5pdCk7XHJcbnZhciBtYXA7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIHZhciBtYXBPcHRpb25zID0ge1xyXG4gICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDU5LjkzNzQ3NSwgMzAuMzUyMjQzKSxcclxuICAgIHpvb206IDE1LFxyXG4gICAgem9vbUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgZGlzYWJsZURvdWJsZUNsaWNrWm9vbTogdHJ1ZSxcclxuICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuICAgIHNjYWxlQ29udHJvbDogZmFsc2UsXHJcbiAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICBwYW5Db250cm9sOiBmYWxzZSxcclxuICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgIG92ZXJ2aWV3TWFwQ29udHJvbDogZmFsc2UsXHJcbiAgICBvdmVydmlld01hcENvbnRyb2xPcHRpb25zOiB7XHJcbiAgICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCxcclxuICAgIHN0eWxlczogW3tcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjNDQ0NDQ0XCJcclxuICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjZjJmMmYyXCJcclxuICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgXCJzYXR1cmF0aW9uXCI6IC0xMDBcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDQ1XHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcclxuICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiNlY2FlNDZcIlxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxyXG4gICAgICB9XVxyXG4gICAgfV0sXHJcbiAgfVxyXG4gIHZhciBtYXBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215bWFwJyk7XHJcbiAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwRWxlbWVudCwgbWFwT3B0aW9ucyk7XHJcbiAgdmFyIGxvY2F0aW9ucyA9IFtdO1xyXG4gIGZvciAoaSA9IDA7IGkgPCBsb2NhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChsb2NhdGlvbnNbaV1bMV0gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgZGVzY3JpcHRpb24gPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uID0gbG9jYXRpb25zW2ldWzFdO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uc1tpXVsyXSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0ZWxlcGhvbmUgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRlbGVwaG9uZSA9IGxvY2F0aW9uc1tpXVsyXTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbnNbaV1bM10gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgZW1haWwgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVtYWlsID0gbG9jYXRpb25zW2ldWzNdO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uc1tpXVs0XSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB3ZWIgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdlYiA9IGxvY2F0aW9uc1tpXVs0XTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbnNbaV1bN10gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgbWFya2VyaWNvbiA9ICcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWFya2VyaWNvbiA9IGxvY2F0aW9uc1tpXVs3XTtcclxuICAgIH1cclxuICAgIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICBpY29uOiBtYXJrZXJpY29uLFxyXG4gICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsb2NhdGlvbnNbaV1bNV0sIGxvY2F0aW9uc1tpXVs2XSksXHJcbiAgICAgIG1hcDogbWFwLFxyXG4gICAgICB0aXRsZTogbG9jYXRpb25zW2ldWzBdLFxyXG4gICAgICBkZXNjOiBkZXNjcmlwdGlvbixcclxuICAgICAgdGVsOiB0ZWxlcGhvbmUsXHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgd2ViOiB3ZWJcclxuICAgIH0pO1xyXG4gICAgbGluayA9ICcnO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
