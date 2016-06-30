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

  $('.tabs__control-link').on('click', function(e) {
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



//validation
var validateForm = (function() {

  function init() {
    _setUpListners();
  }

  function _setUpListners() {
    $('#auth').submit(_auth);
    $('#feedback').submit(_sendMessage);
    $('#user_human').click(_check);
    $('body').on('click', '.error__close', _closeMsg);
  }

  function _sendMessage(e) {
    e.preventDefault();
    var result = _validateMessageForm();

    if (result === true) {
      _errorMessage('Ваше сообщение успешно отправлено!');
      document.getElementById("feedback").reset();
    } else {
      _errorMessage(result['message']);

    }

  }


  function _closeMsg(e) {
    e.preventDefault();
    $('.error').remove();
    $('body').css('overflow', 'auto');
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

  function _errorMessage(message) {
    var msg = '<div class="error">' +
      '<div class="error__container">' +
      '<a href="#" class="error__close">' +
      '<i class="fa fa-times-circle" aria-hidden="true"></i></a>' +
      '<div class="error__message">' + message + '</div></div></div>';
    $('body').prepend(msg);
    $('.error').css('top', $('body').scrollTop() + 'px');
    $('body').css('overflow', 'hidden');
  };

  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  function _validateMessageForm() {
    var $this = $(this),
      form = $('#feedback'),
      user_name = form.find('#user_name'),
      user_email = form.find('#user_email'),
      msg_text = form.find('#msg_text'),
      obj = {};
    var validEmail = isEmail(user_email.val());

    if (user_name.val() === '' || user_email.val() === '' || msg_text.val() === '') {
      obj.valid = false;
      obj.message = "Вы заполнили не все поля!";
      return obj;
    }
    if (!validEmail) {
      obj.valid = false;
      obj.message = "Введите корректный Email!";
      return obj;
    }

    return true;

  }


  function _validateAuthForm() {
    var $this = $(this),
      form = $('#auth'),
      user_login = form.find('#user_login'),
      user_pass = form.find('#user_pass'),
      user_human = form.find('#user_human'),
      human_yes = form.find('#human_yes'),
      obj = {};

    if (user_login.val() === '' || user_pass.val() === '') {
      obj.valid = false;
      obj.message = "Вы заполнили не все поля!";
      return obj;
    }

    if (!user_human.prop('checked') || !human_yes.prop('checked')) {
      obj.valid = false;
      obj.message = "Роботам тут не место!";
      return obj;
    }

    return true;

  }

  function _auth(e) {
    e.preventDefault();
    var form = $('#auth'),
      result = _validateAuthForm();

    if (result === true) {
      location.href = 'admin.html';
      document.getElementById("auth").reset();
    } else {
      _errorMessage(result['message']);

    }
  }


  return {
    init: init
  }
})();

validateForm.init();



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

    var slider_info = $('.slider__info');
    var slider_info_items = slider_info.find('.slider__info-item');
    var slider_info_active = slider_info.find('.slider__info-item.active');


    currentImg++;
    if (currentImg >= items.length) {
      currentImg = 0;
    }

    var reqItem = items.eq(currentImg),
      reqInfo = slider_info_items.eq(currentImg-1);
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
      slider_info_active.removeClass('active');
      reqInfo.addClass('active');
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

    var slider_info = $('.slider__info');
    var slider_info_items = slider_info.find('.slider__info-item');
    var slider_info_active = slider_info.find('.slider__info-item.active');

    currentImg--;
    var reqItem = items.eq(currentImg),
      reqImg = items.eq(currentImg + 1).find('img');
      reqInfo = slider_info_items.eq(currentImg);
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
      slider_info_active.removeClass('active');
      reqInfo.addClass('active');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm15bWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4YUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBteU1vZHVsZSA9IChmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIHZhciBpbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfc2V0VXBMaXN0bmVycygpO1xyXG4gIH07XHJcblxyXG4gIHZhciBfc2V0VXBMaXN0bmVycyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmxvZ2luLWJ0bicpLm9uKCdjbGljaycsIF9zaG93TG9naW4pO1xyXG4gICAgJCgnLmJ0bi1pbmRleCcpLm9uKCdjbGljaycsIF9zaG93SW5mbyk7XHJcbiAgICAkKCcuaW5kZXgnKS5vbignY2xpY2snLCBfc2hvd0luZm8pO1xyXG4gICAgJCgnLndyYXBwZXIuYmcnKS5vbignY2xpY2snLCBfYmFja2dyb3VuZENsaWNrKTtcclxuICB9O1xyXG5cclxuICB2YXIgX3Nob3dMb2dpbiA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJy5mbGlwJykudG9nZ2xlQ2xhc3MoJ2ZsaXBwaW5nJyk7XHJcbiAgICAkKCcubG9naW4tYnRuJykuY3NzKHtcclxuICAgICAgJ3Zpc2liaWxpdHknOiAnaGlkZGVuJ1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIF9zaG93SW5mbyA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJy5mbGlwJykucmVtb3ZlQ2xhc3MoJ2ZsaXBwaW5nJyk7XHJcbiAgICAkKCcubG9naW4tYnRuJykuY3NzKHtcclxuICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZSdcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHZhciBfYmFja2dyb3VuZENsaWNrID0gZnVuY3Rpb24oZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAnd3JhcHBlciBiZycpIHtcclxuICAgICAgJCgnLmZsaXAnKS5yZW1vdmVDbGFzcygnZmxpcHBpbmcnKTtcclxuICAgICAgJCgnLmxvZ2luLWJ0bicpLmNzcyh7XHJcbiAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZSdcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQ6IGluaXRcclxuICB9XHJcbn0pKCk7XHJcblxyXG5teU1vZHVsZS5pbml0KCk7XHJcblxyXG4vL9Ch0LzQtdGJ0LXQvdC40LUgYmFja2dyb3VuZFxyXG4vLyAkKGZ1bmN0aW9uKCkge1xyXG4vLyAgIHZhciB4ID0gMDtcclxuLy8gICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuLy8gICAgIHggLT0gMTtcclxuLy8gICAgICQoJy53cmFwcGVyJykuY3NzKCdiYWNrZ3JvdW5kLXBvc2l0aW9uJywgeCArICdweCAwJyk7XHJcbi8vICAgfSwgNTApO1xyXG4vLyB9KVxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICAkKCcudGFic19fY29udHJvbC1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGl0ZW0gPSAkKHRoaXMpLmNsb3Nlc3QoJy50YWJzX19jb250cm9scy1pdGVtJyksXHJcbiAgICAgIGNvbnRlbnRJdGVtID0gJCgnLnRhYnNfX2l0ZW0nKSxcclxuICAgICAgaXRlbVBvc2l0aW9uID0gaXRlbS5pbmRleCgpO1xyXG4gICAgY29udGVudEl0ZW0uZXEoaXRlbVBvc2l0aW9uKVxyXG4gICAgICAuYWRkKGl0ZW0pXHJcbiAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgLnNpYmxpbmdzKClcclxuICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy/QnNC10LTQu9C10L3QvdGL0Lkg0YHQutGA0L7Qu9C7XHJcbiAgJCgnYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XHJcbiAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XHJcbiAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgJ10nKTtcclxuICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcclxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3BcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy9TcGlubmVyXHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICQoXCIjcGFnZS1wcmVsb2FkZXJcIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAkKFwiLmJnXCIpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcbiAgfSwgNDAwMCk7XHJcblxyXG4gICQoJy5jb3VudGVyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykucHJvcCgnQ291bnRlcicsIDApLmFuaW1hdGUoe1xyXG4gICAgICBDb3VudGVyOiAkKHRoaXMpLnRleHQoKVxyXG4gICAgfSwge1xyXG4gICAgICBkdXJhdGlvbjogNDAwMCxcclxuICAgICAgZWFzaW5nOiAnc3dpbmcnLFxyXG4gICAgICBzdGVwOiBmdW5jdGlvbihub3cpIHtcclxuICAgICAgICAkKHRoaXMpLnRleHQoTWF0aC5jZWlsKG5vdykgKyAnJScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy/QnNC10L3RjiDQvdCw0LLQuNCz0LDRhtC40LhcclxuICAkKCcjbmF2LWljb24nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnb3ZlcmZsb3cnKTtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICQoJyNvdmVybGF5JykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICB9KTtcclxuXHJcbiAgLy9TaWRlYmFyXHJcbiAgJCgnLnNpZGViYXJfX2lubmVyJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuc2lkZWJhcicpLnRvZ2dsZUNsYXNzKCdzaWRlYmFyX19hY3RpdmUnKTtcclxuICB9KTtcclxuXHJcblxyXG4gIC8vU2lkZWJhciBibG9nXHJcbiAgdmFyIHNpZGViYXIgPSAkKCcuc2lkZWJhcl9faW5uZXInKTtcclxuICB2YXIgdG9wID0gc2lkZWJhci5vZmZzZXQoKS50b3AgLSBwYXJzZUZsb2F0KHNpZGViYXIuY3NzKCdtYXJnaW4tdG9wJykpO1xyXG5cclxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICB2YXIgeSA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgICBpZiAoeSA+PSB0b3ApIHtcclxuICAgICAgc2lkZWJhci5hZGRDbGFzcygnZml4ZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNpZGViYXIucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcbi8vdmFsaWRhdGlvblxyXG52YXIgdmFsaWRhdGVGb3JtID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgX3NldFVwTGlzdG5lcnMoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9zZXRVcExpc3RuZXJzKCkge1xyXG4gICAgJCgnI2F1dGgnKS5zdWJtaXQoX2F1dGgpO1xyXG4gICAgJCgnI2ZlZWRiYWNrJykuc3VibWl0KF9zZW5kTWVzc2FnZSk7XHJcbiAgICAkKCcjdXNlcl9odW1hbicpLmNsaWNrKF9jaGVjayk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5lcnJvcl9fY2xvc2UnLCBfY2xvc2VNc2cpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3NlbmRNZXNzYWdlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciByZXN1bHQgPSBfdmFsaWRhdGVNZXNzYWdlRm9ybSgpO1xyXG5cclxuICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcclxuICAgICAgX2Vycm9yTWVzc2FnZSgn0JLQsNGI0LUg0YHQvtC+0LHRidC10L3QuNC1INGD0YHQv9C10YjQvdC+INC+0YLQv9GA0LDQstC70LXQvdC+IScpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZlZWRiYWNrXCIpLnJlc2V0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfZXJyb3JNZXNzYWdlKHJlc3VsdFsnbWVzc2FnZSddKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIGZ1bmN0aW9uIF9jbG9zZU1zZyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcuZXJyb3InKS5yZW1vdmUoKTtcclxuICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2F1dG8nKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9jaGVjaygpIHtcclxuXHJcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAkKCcjaHVtYW5feWVzJykucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgJCgnI2h1bWFuX25vJykucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNodW1hbl95ZXMnKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICQoJyNodW1hbl9ubycpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfZXJyb3JNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgIHZhciBtc2cgPSAnPGRpdiBjbGFzcz1cImVycm9yXCI+JyArXHJcbiAgICAgICc8ZGl2IGNsYXNzPVwiZXJyb3JfX2NvbnRhaW5lclwiPicgK1xyXG4gICAgICAnPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVycm9yX19jbG9zZVwiPicgK1xyXG4gICAgICAnPGkgY2xhc3M9XCJmYSBmYS10aW1lcy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9hPicgK1xyXG4gICAgICAnPGRpdiBjbGFzcz1cImVycm9yX19tZXNzYWdlXCI+JyArIG1lc3NhZ2UgKyAnPC9kaXY+PC9kaXY+PC9kaXY+JztcclxuICAgICQoJ2JvZHknKS5wcmVwZW5kKG1zZyk7XHJcbiAgICAkKCcuZXJyb3InKS5jc3MoJ3RvcCcsICQoJ2JvZHknKS5zY3JvbGxUb3AoKSArICdweCcpO1xyXG4gICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaXNFbWFpbChlbWFpbCkge1xyXG4gICAgdmFyIHJlZ2V4ID0gL14oW2EtekEtWjAtOV8uKy1dKStcXEAoKFthLXpBLVowLTktXSkrXFwuKSsoW2EtekEtWjAtOV17Miw0fSkrJC87XHJcbiAgICByZXR1cm4gcmVnZXgudGVzdChlbWFpbCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfdmFsaWRhdGVNZXNzYWdlRm9ybSgpIHtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgIGZvcm0gPSAkKCcjZmVlZGJhY2snKSxcclxuICAgICAgdXNlcl9uYW1lID0gZm9ybS5maW5kKCcjdXNlcl9uYW1lJyksXHJcbiAgICAgIHVzZXJfZW1haWwgPSBmb3JtLmZpbmQoJyN1c2VyX2VtYWlsJyksXHJcbiAgICAgIG1zZ190ZXh0ID0gZm9ybS5maW5kKCcjbXNnX3RleHQnKSxcclxuICAgICAgb2JqID0ge307XHJcbiAgICB2YXIgdmFsaWRFbWFpbCA9IGlzRW1haWwodXNlcl9lbWFpbC52YWwoKSk7XHJcblxyXG4gICAgaWYgKHVzZXJfbmFtZS52YWwoKSA9PT0gJycgfHwgdXNlcl9lbWFpbC52YWwoKSA9PT0gJycgfHwgbXNnX3RleHQudmFsKCkgPT09ICcnKSB7XHJcbiAgICAgIG9iai52YWxpZCA9IGZhbHNlO1xyXG4gICAgICBvYmoubWVzc2FnZSA9IFwi0JLRiyDQt9Cw0L/QvtC70L3QuNC70Lgg0L3QtSDQstGB0LUg0L/QvtC70Y8hXCI7XHJcbiAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICBpZiAoIXZhbGlkRW1haWwpIHtcclxuICAgICAgb2JqLnZhbGlkID0gZmFsc2U7XHJcbiAgICAgIG9iai5tZXNzYWdlID0gXCLQktCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSBFbWFpbCFcIjtcclxuICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gX3ZhbGlkYXRlQXV0aEZvcm0oKSB7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICBmb3JtID0gJCgnI2F1dGgnKSxcclxuICAgICAgdXNlcl9sb2dpbiA9IGZvcm0uZmluZCgnI3VzZXJfbG9naW4nKSxcclxuICAgICAgdXNlcl9wYXNzID0gZm9ybS5maW5kKCcjdXNlcl9wYXNzJyksXHJcbiAgICAgIHVzZXJfaHVtYW4gPSBmb3JtLmZpbmQoJyN1c2VyX2h1bWFuJyksXHJcbiAgICAgIGh1bWFuX3llcyA9IGZvcm0uZmluZCgnI2h1bWFuX3llcycpLFxyXG4gICAgICBvYmogPSB7fTtcclxuXHJcbiAgICBpZiAodXNlcl9sb2dpbi52YWwoKSA9PT0gJycgfHwgdXNlcl9wYXNzLnZhbCgpID09PSAnJykge1xyXG4gICAgICBvYmoudmFsaWQgPSBmYWxzZTtcclxuICAgICAgb2JqLm1lc3NhZ2UgPSBcItCS0Ysg0LfQsNC/0L7Qu9C90LjQu9C4INC90LUg0LLRgdC1INC/0L7Qu9GPIVwiO1xyXG4gICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdXNlcl9odW1hbi5wcm9wKCdjaGVja2VkJykgfHwgIWh1bWFuX3llcy5wcm9wKCdjaGVja2VkJykpIHtcclxuICAgICAgb2JqLnZhbGlkID0gZmFsc2U7XHJcbiAgICAgIG9iai5tZXNzYWdlID0gXCLQoNC+0LHQvtGC0LDQvCDRgtGD0YIg0L3QtSDQvNC10YHRgtC+IVwiO1xyXG4gICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9hdXRoKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBmb3JtID0gJCgnI2F1dGgnKSxcclxuICAgICAgcmVzdWx0ID0gX3ZhbGlkYXRlQXV0aEZvcm0oKTtcclxuXHJcbiAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XHJcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSAnYWRtaW4uaHRtbCc7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0aFwiKS5yZXNldCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX2Vycm9yTWVzc2FnZShyZXN1bHRbJ21lc3NhZ2UnXSk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0OiBpbml0XHJcbiAgfVxyXG59KSgpO1xyXG5cclxudmFsaWRhdGVGb3JtLmluaXQoKTtcclxuXHJcblxyXG5cclxuLy9TbGlkZXIgTW9kdWxlXHJcbnZhciBTbGlkZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGN1cnJlbnRJbWcgPSAxO1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgX3NldFVwTGlzdG5lcnMoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9zZXRVcExpc3RuZXJzKCkge1xyXG4gICAgJCgnLnNsaWRlcl9fbGluay1yaWdodCcpLm9uKCdjbGljaycsIF9uZXh0U2xpZGUpO1xyXG4gICAgJCgnLnNsaWRlcl9fbGluay1sZWZ0Jykub24oJ2NsaWNrJywgX3ByZXZTbGlkZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfbmV4dEltZygpIHtcclxuICAgIHZhciBjb250YWluZXIgPSAkKCcuc2xpZGVyX19uZXh0JyksXHJcbiAgICAgIGl0ZW1zID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfX2l0ZW0nKSxcclxuICAgICAgYWN0aXZlSXRlbSA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX19pdGVtLmFjdGl2ZScpO1xyXG4gICAgdmFyIHJlcUl0ZW0gPSBpdGVtcy5lcShjdXJyZW50SW1nIC0gMik7XHJcblxyXG4gICAgYWN0aXZlSXRlbS5hbmltYXRlKHtcclxuICAgICAgJ2JvdHRvbSc6ICcxMDAlJ1xyXG4gICAgfSwgMzAwKTtcclxuXHJcbiAgICByZXFJdGVtLmFuaW1hdGUoe1xyXG4gICAgICAnYm90dG9tJzogJzAlJ1xyXG4gICAgfSwgMzAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgYWN0aXZlSXRlbS5yZW1vdmVDbGFzcygnYWN0aXZlJykuY3NzKCdib3R0b20nLCAnLTEwMCUnKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9wcmV2SW1nKCkge1xyXG4gICAgdmFyIGNvbnRhaW5lciA9ICQoJy5zbGlkZXJfX3ByZXYnKSxcclxuICAgICAgaXRlbXMgPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faXRlbScpLFxyXG4gICAgICBhY3RpdmVJdGVtID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfX2l0ZW0uYWN0aXZlJyk7XHJcbiAgICB2YXIgcmVxSXRlbSA9IGl0ZW1zLmVxKGN1cnJlbnRJbWcgLSAyKTtcclxuXHJcbiAgICBhY3RpdmVJdGVtLmFuaW1hdGUoe1xyXG4gICAgICAndG9wJzogJzEwMCUnXHJcbiAgICB9LCAzMDApO1xyXG4gICAgcmVxSXRlbS5hbmltYXRlKHtcclxuICAgICAgJ3RvcCc6ICcwJSdcclxuICAgIH0sIDMwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmNzcygndG9wJywgJy0xMDAlJyk7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfbmV4dFNsaWRlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBiaWdTbGlkZSA9ICQoJy5zbGlkZXJfX2NlbnRlcicpLFxyXG4gICAgICBpbWcgPSBiaWdTbGlkZS5maW5kKCdpbWcnKTtcclxuICAgIHZhciBjb250YWluZXIgPSAkKCcuc2xpZGVyX19uZXh0Jyk7XHJcbiAgICB2YXIgaXRlbXMgPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faXRlbScpLFxyXG4gICAgICBhY3RpdmVJdGVtID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfX2l0ZW0uYWN0aXZlJyk7XHJcblxyXG4gICAgdmFyIHNsaWRlcl9pbmZvID0gJCgnLnNsaWRlcl9faW5mbycpO1xyXG4gICAgdmFyIHNsaWRlcl9pbmZvX2l0ZW1zID0gc2xpZGVyX2luZm8uZmluZCgnLnNsaWRlcl9faW5mby1pdGVtJyk7XHJcbiAgICB2YXIgc2xpZGVyX2luZm9fYWN0aXZlID0gc2xpZGVyX2luZm8uZmluZCgnLnNsaWRlcl9faW5mby1pdGVtLmFjdGl2ZScpO1xyXG5cclxuXHJcbiAgICBjdXJyZW50SW1nKys7XHJcbiAgICBpZiAoY3VycmVudEltZyA+PSBpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgY3VycmVudEltZyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlcUl0ZW0gPSBpdGVtcy5lcShjdXJyZW50SW1nKSxcclxuICAgICAgcmVxSW5mbyA9IHNsaWRlcl9pbmZvX2l0ZW1zLmVxKGN1cnJlbnRJbWctMSk7XHJcbiAgICByZXFJbWcgPSBpdGVtcy5lcShjdXJyZW50SW1nIC0gMSkuZmluZCgnaW1nJyk7XHJcblxyXG4gICAgYWN0aXZlSXRlbS5hbmltYXRlKHtcclxuICAgICAgJ2JvdHRvbSc6ICcxMDAlJ1xyXG4gICAgfSwgMzAwKTtcclxuXHJcbiAgICBpbWcuY3NzKHsgb3BhY2l0eTogJzAnIH0pO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGltZy5hdHRyKCdzcmMnLCByZXFJbWcuYXR0cignc3JjJykpO1xyXG4gICAgICBpbWcuY3NzKHtcclxuICAgICAgICBvcGFjaXR5OiAnMScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAuM3MnXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMzAwKTtcclxuXHJcblxyXG5cclxuICAgIHJlcUl0ZW0uYW5pbWF0ZSh7XHJcbiAgICAgICdib3R0b20nOiAnMCUnXHJcbiAgICB9LCAzMDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5jc3MoJ2JvdHRvbScsICctMTAwJScpO1xyXG4gICAgICBzbGlkZXJfaW5mb19hY3RpdmUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICByZXFJbmZvLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgIF9wcmV2SW1nKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfcHJldlNsaWRlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBiaWdTbGlkZSA9ICQoJy5zbGlkZXJfX2NlbnRlcicpLFxyXG4gICAgICBpbWcgPSBiaWdTbGlkZS5maW5kKCdpbWcnKTtcclxuICAgIHZhciBjb250YWluZXIgPSAkKCcuc2xpZGVyX19wcmV2Jyk7XHJcbiAgICB2YXIgaXRlbXMgPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faXRlbScpLFxyXG4gICAgICBhY3RpdmVJdGVtID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfX2l0ZW0uYWN0aXZlJyk7XHJcblxyXG4gICAgdmFyIHNsaWRlcl9pbmZvID0gJCgnLnNsaWRlcl9faW5mbycpO1xyXG4gICAgdmFyIHNsaWRlcl9pbmZvX2l0ZW1zID0gc2xpZGVyX2luZm8uZmluZCgnLnNsaWRlcl9faW5mby1pdGVtJyk7XHJcbiAgICB2YXIgc2xpZGVyX2luZm9fYWN0aXZlID0gc2xpZGVyX2luZm8uZmluZCgnLnNsaWRlcl9faW5mby1pdGVtLmFjdGl2ZScpO1xyXG5cclxuICAgIGN1cnJlbnRJbWctLTtcclxuICAgIHZhciByZXFJdGVtID0gaXRlbXMuZXEoY3VycmVudEltZyksXHJcbiAgICAgIHJlcUltZyA9IGl0ZW1zLmVxKGN1cnJlbnRJbWcgKyAxKS5maW5kKCdpbWcnKTtcclxuICAgICAgcmVxSW5mbyA9IHNsaWRlcl9pbmZvX2l0ZW1zLmVxKGN1cnJlbnRJbWcpO1xyXG4gICAgaWYgKGN1cnJlbnRJbWcgPCAwKSB7XHJcbiAgICAgIGN1cnJlbnRJbWcgPSBpdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2ZUl0ZW0uYW5pbWF0ZSh7XHJcbiAgICAgICd0b3AnOiAnMTAwJSdcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgaW1nLmNzcyh7IG9wYWNpdHk6ICcwJyB9KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBpbWcuYXR0cignc3JjJywgcmVxSW1nLmF0dHIoJ3NyYycpKTtcclxuICAgICAgaW1nLmNzcyh7XHJcbiAgICAgICAgb3BhY2l0eTogJzEnLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgLjNzJ1xyXG4gICAgICB9KTtcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgcmVxSXRlbS5hbmltYXRlKHtcclxuICAgICAgJ3RvcCc6ICcwJSdcclxuICAgIH0sIDMwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmNzcygndG9wJywgJy0xMDAlJyk7XHJcbiAgICAgIHNsaWRlcl9pbmZvX2FjdGl2ZS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIHJlcUluZm8uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgX25leHRJbWcoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0OiBpbml0XHJcbiAgfVxyXG59KSgpO1xyXG5cclxuU2xpZGVyLmluaXQoKTtcclxuIiwiZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCAnbG9hZCcsIGluaXQpO1xyXG52YXIgbWFwO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICB2YXIgbWFwT3B0aW9ucyA9IHtcclxuICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1OS45Mzc0NzUsIDMwLjM1MjI0MyksXHJcbiAgICB6b29tOiAxNSxcclxuICAgIHpvb21Db250cm9sOiBmYWxzZSxcclxuICAgIGRpc2FibGVEb3VibGVDbGlja1pvb206IHRydWUsXHJcbiAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXHJcbiAgICBzY2FsZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxyXG4gICAgcGFuQ29udHJvbDogZmFsc2UsXHJcbiAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICBvdmVydmlld01hcENvbnRyb2w6IGZhbHNlLFxyXG4gICAgb3ZlcnZpZXdNYXBDb250cm9sT3B0aW9uczoge1xyXG4gICAgICBvcGVuZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsXHJcbiAgICBzdHlsZXM6IFt7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgICBcImNvbG9yXCI6IFwiIzQ0NDQ0NFwiXHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgICBcImNvbG9yXCI6IFwiI2YyZjJmMlwiXHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICB9XVxyXG4gICAgfSwge1xyXG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwic2F0dXJhdGlvblwiOiAtMTAwXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcImxpZ2h0bmVzc1wiOiA0NVxyXG4gICAgICB9XVxyXG4gICAgfSwge1xyXG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwiXHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICB9XVxyXG4gICAgfSwge1xyXG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjZWNhZTQ2XCJcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9uXCJcclxuICAgICAgfV1cclxuICAgIH1dLFxyXG4gIH1cclxuICB2YXIgbWFwRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteW1hcCcpO1xyXG4gIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKG1hcEVsZW1lbnQsIG1hcE9wdGlvbnMpO1xyXG4gIHZhciBsb2NhdGlvbnMgPSBbXTtcclxuICBmb3IgKGkgPSAwOyBpIDwgbG9jYXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAobG9jYXRpb25zW2ldWzFdID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZXNjcmlwdGlvbiA9IGxvY2F0aW9uc1tpXVsxXTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbnNbaV1bMl0gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGVsZXBob25lID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZWxlcGhvbmUgPSBsb2NhdGlvbnNbaV1bMl07XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYXRpb25zW2ldWzNdID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGVtYWlsID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbWFpbCA9IGxvY2F0aW9uc1tpXVszXTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbnNbaV1bNF0gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgd2ViID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3ZWIgPSBsb2NhdGlvbnNbaV1bNF07XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYXRpb25zW2ldWzddID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIG1hcmtlcmljb24gPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1hcmtlcmljb24gPSBsb2NhdGlvbnNbaV1bN107XHJcbiAgICB9XHJcbiAgICBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgaWNvbjogbWFya2VyaWNvbixcclxuICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobG9jYXRpb25zW2ldWzVdLCBsb2NhdGlvbnNbaV1bNl0pLFxyXG4gICAgICBtYXA6IG1hcCxcclxuICAgICAgdGl0bGU6IGxvY2F0aW9uc1tpXVswXSxcclxuICAgICAgZGVzYzogZGVzY3JpcHRpb24sXHJcbiAgICAgIHRlbDogdGVsZXBob25lLFxyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIHdlYjogd2ViXHJcbiAgICB9KTtcclxuICAgIGxpbmsgPSAnJztcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
