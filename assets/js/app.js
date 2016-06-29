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
    var validEmail  = isEmail(user_email.val());

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm15bWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG15TW9kdWxlID0gKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgdmFyIGluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIF9zZXRVcExpc3RuZXJzKCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIF9zZXRVcExpc3RuZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcubG9naW4tYnRuJykub24oJ2NsaWNrJywgX3Nob3dMb2dpbik7XHJcbiAgICAkKCcuYnRuLWluZGV4Jykub24oJ2NsaWNrJywgX3Nob3dJbmZvKTtcclxuICAgICQoJy5pbmRleCcpLm9uKCdjbGljaycsIF9zaG93SW5mbyk7XHJcbiAgICAkKCcud3JhcHBlci5iZycpLm9uKCdjbGljaycsIF9iYWNrZ3JvdW5kQ2xpY2spO1xyXG4gIH07XHJcblxyXG4gIHZhciBfc2hvd0xvZ2luID0gZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLmZsaXAnKS50b2dnbGVDbGFzcygnZmxpcHBpbmcnKTtcclxuICAgICQoJy5sb2dpbi1idG4nKS5jc3Moe1xyXG4gICAgICAndmlzaWJpbGl0eSc6ICdoaWRkZW4nXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB2YXIgX3Nob3dJbmZvID0gZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLmZsaXAnKS5yZW1vdmVDbGFzcygnZmxpcHBpbmcnKTtcclxuICAgICQoJy5sb2dpbi1idG4nKS5jc3Moe1xyXG4gICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJ1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIF9iYWNrZ3JvdW5kQ2xpY2sgPSBmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09ICd3cmFwcGVyIGJnJykge1xyXG4gICAgICAkKCcuZmxpcCcpLnJlbW92ZUNsYXNzKCdmbGlwcGluZycpO1xyXG4gICAgICAkKCcubG9naW4tYnRuJykuY3NzKHtcclxuICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5pdDogaW5pdFxyXG4gIH1cclxufSkoKTtcclxuXHJcbm15TW9kdWxlLmluaXQoKTtcclxuXHJcbi8v0KHQvNC10YnQtdC90LjQtSBiYWNrZ3JvdW5kXHJcbi8vICQoZnVuY3Rpb24oKSB7XHJcbi8vICAgdmFyIHggPSAwO1xyXG4vLyAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgeCAtPSAxO1xyXG4vLyAgICAgJCgnLndyYXBwZXInKS5jc3MoJ2JhY2tncm91bmQtcG9zaXRpb24nLCB4ICsgJ3B4IDAnKTtcclxuLy8gICB9LCA1MCk7XHJcbi8vIH0pXHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gICQoJy50YWJzX19jb250cm9sLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgaXRlbSA9ICQodGhpcykuY2xvc2VzdCgnLnRhYnNfX2NvbnRyb2xzLWl0ZW0nKSxcclxuICAgICAgY29udGVudEl0ZW0gPSAkKCcudGFic19faXRlbScpLFxyXG4gICAgICBpdGVtUG9zaXRpb24gPSBpdGVtLmluZGV4KCk7XHJcbiAgICBjb250ZW50SXRlbS5lcShpdGVtUG9zaXRpb24pXHJcbiAgICAgIC5hZGQoaXRlbSlcclxuICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAuc2libGluZ3MoKVxyXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvL9Cc0LXQtNC70LXQvdC90YvQuSDRgdC60YDQvtC70LtcclxuICAkKCdhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcclxuICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcclxuICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyAnXScpO1xyXG4gICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvL1NwaW5uZXJcclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIiNwYWdlLXByZWxvYWRlclwiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICQoXCIuYmdcIikuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuICB9LCA0MDAwKTtcclxuXHJcbiAgJCgnLmNvdW50ZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS5wcm9wKCdDb3VudGVyJywgMCkuYW5pbWF0ZSh7XHJcbiAgICAgIENvdW50ZXI6ICQodGhpcykudGV4dCgpXHJcbiAgICB9LCB7XHJcbiAgICAgIGR1cmF0aW9uOiA0MDAwLFxyXG4gICAgICBlYXNpbmc6ICdzd2luZycsXHJcbiAgICAgIHN0ZXA6IGZ1bmN0aW9uKG5vdykge1xyXG4gICAgICAgICQodGhpcykudGV4dChNYXRoLmNlaWwobm93KSArICclJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvL9Cc0LXQvdGOINC90LDQstC40LPQsNGG0LjQuFxyXG4gICQoJyNuYXYtaWNvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdycpO1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgJCgnI292ZXJsYXknKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gIH0pO1xyXG5cclxuICAvL1NpZGViYXJcclxuICAkKCcuc2lkZWJhcl9faW5uZXInKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoJy5zaWRlYmFyJykudG9nZ2xlQ2xhc3MoJ3NpZGViYXJfX2FjdGl2ZScpO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgLy9TaWRlYmFyIGJsb2dcclxuICB2YXIgc2lkZWJhciA9ICQoJy5zaWRlYmFyX19pbm5lcicpO1xyXG4gIHZhciB0b3AgPSBzaWRlYmFyLm9mZnNldCgpLnRvcCAtIHBhcnNlRmxvYXQoc2lkZWJhci5jc3MoJ21hcmdpbi10b3AnKSk7XHJcblxyXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIHZhciB5ID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICAgIGlmICh5ID49IHRvcCkge1xyXG4gICAgICBzaWRlYmFyLmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2lkZWJhci5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG4vL1NsaWRlciBNb2R1bGVcclxudmFyIFNsaWRlciA9IChmdW5jdGlvbigpIHtcclxuICB2YXIgY3VycmVudEltZyA9IDE7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBfc2V0VXBMaXN0bmVycygpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3NldFVwTGlzdG5lcnMoKSB7XHJcbiAgICAkKCcuc2xpZGVyX19saW5rLXJpZ2h0Jykub24oJ2NsaWNrJywgX25leHRTbGlkZSk7XHJcbiAgICAkKCcuc2xpZGVyX19saW5rLWxlZnQnKS5vbignY2xpY2snLCBfcHJldlNsaWRlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9uZXh0SW1nKCkge1xyXG4gICAgdmFyIGNvbnRhaW5lciA9ICQoJy5zbGlkZXJfX25leHQnKSxcclxuICAgICAgaXRlbXMgPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faXRlbScpLFxyXG4gICAgICBhY3RpdmVJdGVtID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfX2l0ZW0uYWN0aXZlJyk7XHJcbiAgICB2YXIgcmVxSXRlbSA9IGl0ZW1zLmVxKGN1cnJlbnRJbWcgLSAyKTtcclxuXHJcbiAgICBhY3RpdmVJdGVtLmFuaW1hdGUoe1xyXG4gICAgICAnYm90dG9tJzogJzEwMCUnXHJcbiAgICB9LCAzMDApO1xyXG5cclxuICAgIHJlcUl0ZW0uYW5pbWF0ZSh7XHJcbiAgICAgICdib3R0b20nOiAnMCUnXHJcbiAgICB9LCAzMDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5jc3MoJ2JvdHRvbScsICctMTAwJScpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3ByZXZJbWcoKSB7XHJcbiAgICB2YXIgY29udGFpbmVyID0gJCgnLnNsaWRlcl9fcHJldicpLFxyXG4gICAgICBpdGVtcyA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX19pdGVtJyksXHJcbiAgICAgIGFjdGl2ZUl0ZW0gPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faXRlbS5hY3RpdmUnKTtcclxuICAgIHZhciByZXFJdGVtID0gaXRlbXMuZXEoY3VycmVudEltZyAtIDIpO1xyXG5cclxuICAgIGFjdGl2ZUl0ZW0uYW5pbWF0ZSh7XHJcbiAgICAgICd0b3AnOiAnMTAwJSdcclxuICAgIH0sIDMwMCk7XHJcbiAgICByZXFJdGVtLmFuaW1hdGUoe1xyXG4gICAgICAndG9wJzogJzAlJ1xyXG4gICAgfSwgMzAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgYWN0aXZlSXRlbS5yZW1vdmVDbGFzcygnYWN0aXZlJykuY3NzKCd0b3AnLCAnLTEwMCUnKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9uZXh0U2xpZGUoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGJpZ1NsaWRlID0gJCgnLnNsaWRlcl9fY2VudGVyJyksXHJcbiAgICAgIGltZyA9IGJpZ1NsaWRlLmZpbmQoJ2ltZycpO1xyXG4gICAgdmFyIGNvbnRhaW5lciA9ICQoJy5zbGlkZXJfX25leHQnKTtcclxuICAgIHZhciBpdGVtcyA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX19pdGVtJyksXHJcbiAgICAgIGFjdGl2ZUl0ZW0gPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faXRlbS5hY3RpdmUnKTtcclxuXHJcbiAgICBjdXJyZW50SW1nKys7XHJcbiAgICBpZiAoY3VycmVudEltZyA+PSBpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgY3VycmVudEltZyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlcUl0ZW0gPSBpdGVtcy5lcShjdXJyZW50SW1nKSxcclxuICAgICAgcmVxSW1nID0gaXRlbXMuZXEoY3VycmVudEltZyAtIDEpLmZpbmQoJ2ltZycpO1xyXG5cclxuICAgIGFjdGl2ZUl0ZW0uYW5pbWF0ZSh7XHJcbiAgICAgICdib3R0b20nOiAnMTAwJSdcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgaW1nLmNzcyh7IG9wYWNpdHk6ICcwJyB9KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBpbWcuYXR0cignc3JjJywgcmVxSW1nLmF0dHIoJ3NyYycpKTtcclxuICAgICAgaW1nLmNzcyh7XHJcbiAgICAgICAgb3BhY2l0eTogJzEnLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgLjNzJ1xyXG4gICAgICB9KTtcclxuICAgIH0sIDMwMCk7XHJcblxyXG5cclxuXHJcbiAgICByZXFJdGVtLmFuaW1hdGUoe1xyXG4gICAgICAnYm90dG9tJzogJzAlJ1xyXG4gICAgfSwgMzAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgYWN0aXZlSXRlbS5yZW1vdmVDbGFzcygnYWN0aXZlJykuY3NzKCdib3R0b20nLCAnLTEwMCUnKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgIF9wcmV2SW1nKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfcHJldlNsaWRlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBiaWdTbGlkZSA9ICQoJy5zbGlkZXJfX2NlbnRlcicpLFxyXG4gICAgICBpbWcgPSBiaWdTbGlkZS5maW5kKCdpbWcnKTtcclxuICAgIHZhciBjb250YWluZXIgPSAkKCcuc2xpZGVyX19wcmV2Jyk7XHJcbiAgICB2YXIgaXRlbXMgPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faXRlbScpLFxyXG4gICAgICBhY3RpdmVJdGVtID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfX2l0ZW0uYWN0aXZlJyk7XHJcblxyXG4gICAgY3VycmVudEltZy0tO1xyXG4gICAgdmFyIHJlcUl0ZW0gPSBpdGVtcy5lcShjdXJyZW50SW1nKSxcclxuICAgICAgcmVxSW1nID0gaXRlbXMuZXEoY3VycmVudEltZyArIDEpLmZpbmQoJ2ltZycpO1xyXG4gICAgaWYgKGN1cnJlbnRJbWcgPCAwKSB7XHJcbiAgICAgIGN1cnJlbnRJbWcgPSBpdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2ZUl0ZW0uYW5pbWF0ZSh7XHJcbiAgICAgICd0b3AnOiAnMTAwJSdcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgaW1nLmNzcyh7IG9wYWNpdHk6ICcwJyB9KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBpbWcuYXR0cignc3JjJywgcmVxSW1nLmF0dHIoJ3NyYycpKTtcclxuICAgICAgaW1nLmNzcyh7XHJcbiAgICAgICAgb3BhY2l0eTogJzEnLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgLjNzJ1xyXG4gICAgICB9KTtcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgcmVxSXRlbS5hbmltYXRlKHtcclxuICAgICAgJ3RvcCc6ICcwJSdcclxuICAgIH0sIDMwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmNzcygndG9wJywgJy0xMDAlJyk7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgICBfbmV4dEltZygpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQ6IGluaXRcclxuICB9XHJcbn0pKCk7XHJcblxyXG5TbGlkZXIuaW5pdCgpO1xyXG5cclxuXHJcbi8vdmFsaWRhdGlvblxyXG52YXIgdmFsaWRhdGVGb3JtID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgX3NldFVwTGlzdG5lcnMoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9zZXRVcExpc3RuZXJzKCkge1xyXG4gICAgJCgnI2F1dGgnKS5zdWJtaXQoX2F1dGgpO1xyXG4gICAgJCgnI2ZlZWRiYWNrJykuc3VibWl0KF9zZW5kTWVzc2FnZSk7XHJcbiAgICAkKCcjdXNlcl9odW1hbicpLmNsaWNrKF9jaGVjayk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5lcnJvcl9fY2xvc2UnLCBfY2xvc2VNc2cpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3NlbmRNZXNzYWdlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciByZXN1bHQgPSBfdmFsaWRhdGVNZXNzYWdlRm9ybSgpO1xyXG5cclxuICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcclxuICAgICAgX2Vycm9yTWVzc2FnZSgn0JLQsNGI0LUg0YHQvtC+0LHRidC10L3QuNC1INGD0YHQv9C10YjQvdC+INC+0YLQv9GA0LDQstC70LXQvdC+IScpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZlZWRiYWNrXCIpLnJlc2V0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfZXJyb3JNZXNzYWdlKHJlc3VsdFsnbWVzc2FnZSddKTtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG5cclxuICBmdW5jdGlvbiBfY2xvc2VNc2coZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLmVycm9yJykucmVtb3ZlKCk7XHJcbiAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdhdXRvJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfY2hlY2soKSB7XHJcblxyXG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgJCgnI2h1bWFuX3llcycpLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICQoJyNodW1hbl9ubycpLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjaHVtYW5feWVzJykucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAkKCcjaHVtYW5fbm8nKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX2Vycm9yTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICB2YXIgbXNnID0gJzxkaXYgY2xhc3M9XCJlcnJvclwiPicgK1xyXG4gICAgICAnPGRpdiBjbGFzcz1cImVycm9yX19jb250YWluZXJcIj4nICtcclxuICAgICAgJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlcnJvcl9fY2xvc2VcIj4nICtcclxuICAgICAgJzxpIGNsYXNzPVwiZmEgZmEtdGltZXMtY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYT4nICtcclxuICAgICAgJzxkaXYgY2xhc3M9XCJlcnJvcl9fbWVzc2FnZVwiPicgKyBtZXNzYWdlICsgJzwvZGl2PjwvZGl2PjwvZGl2Pic7XHJcbiAgICAkKCdib2R5JykucHJlcGVuZChtc2cpO1xyXG4gICAgJCgnLmVycm9yJykuY3NzKCd0b3AnLCAkKCdib2R5Jykuc2Nyb2xsVG9wKCkgKyAncHgnKTtcclxuICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGlzRW1haWwoZW1haWwpIHtcclxuICAgIHZhciByZWdleCA9IC9eKFthLXpBLVowLTlfListXSkrXFxAKChbYS16QS1aMC05LV0pK1xcLikrKFthLXpBLVowLTldezIsNH0pKyQvO1xyXG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoZW1haWwpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3ZhbGlkYXRlTWVzc2FnZUZvcm0oKSB7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICBmb3JtID0gJCgnI2ZlZWRiYWNrJyksXHJcbiAgICAgIHVzZXJfbmFtZSA9IGZvcm0uZmluZCgnI3VzZXJfbmFtZScpLFxyXG4gICAgICB1c2VyX2VtYWlsID0gZm9ybS5maW5kKCcjdXNlcl9lbWFpbCcpLFxyXG4gICAgICBtc2dfdGV4dCA9IGZvcm0uZmluZCgnI21zZ190ZXh0JyksXHJcbiAgICAgIG9iaiA9IHt9O1xyXG4gICAgdmFyIHZhbGlkRW1haWwgID0gaXNFbWFpbCh1c2VyX2VtYWlsLnZhbCgpKTtcclxuXHJcbiAgICBpZiAodXNlcl9uYW1lLnZhbCgpID09PSAnJyB8fCB1c2VyX2VtYWlsLnZhbCgpID09PSAnJyB8fCBtc2dfdGV4dC52YWwoKSA9PT0gJycpIHtcclxuICAgICAgb2JqLnZhbGlkID0gZmFsc2U7XHJcbiAgICAgIG9iai5tZXNzYWdlID0gXCLQktGLINC30LDQv9C+0LvQvdC40LvQuCDQvdC1INCy0YHQtSDQv9C+0LvRjyFcIjtcclxuICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIGlmICghdmFsaWRFbWFpbCkge1xyXG4gICAgICBvYmoudmFsaWQgPSBmYWxzZTtcclxuICAgICAgb2JqLm1lc3NhZ2UgPSBcItCS0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5IEVtYWlsIVwiO1xyXG4gICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG5cclxuICB9XHJcblxyXG5cclxuICBmdW5jdGlvbiBfdmFsaWRhdGVBdXRoRm9ybSgpIHtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgIGZvcm0gPSAkKCcjYXV0aCcpLFxyXG4gICAgICB1c2VyX2xvZ2luID0gZm9ybS5maW5kKCcjdXNlcl9sb2dpbicpLFxyXG4gICAgICB1c2VyX3Bhc3MgPSBmb3JtLmZpbmQoJyN1c2VyX3Bhc3MnKSxcclxuICAgICAgdXNlcl9odW1hbiA9IGZvcm0uZmluZCgnI3VzZXJfaHVtYW4nKSxcclxuICAgICAgaHVtYW5feWVzID0gZm9ybS5maW5kKCcjaHVtYW5feWVzJyksXHJcbiAgICAgIG9iaiA9IHt9O1xyXG5cclxuICAgIGlmICh1c2VyX2xvZ2luLnZhbCgpID09PSAnJyB8fCB1c2VyX3Bhc3MudmFsKCkgPT09ICcnKSB7XHJcbiAgICAgIG9iai52YWxpZCA9IGZhbHNlO1xyXG4gICAgICBvYmoubWVzc2FnZSA9IFwi0JLRiyDQt9Cw0L/QvtC70L3QuNC70Lgg0L3QtSDQstGB0LUg0L/QvtC70Y8hXCI7XHJcbiAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1c2VyX2h1bWFuLnByb3AoJ2NoZWNrZWQnKSB8fCAhaHVtYW5feWVzLnByb3AoJ2NoZWNrZWQnKSkge1xyXG4gICAgICBvYmoudmFsaWQgPSBmYWxzZTtcclxuICAgICAgb2JqLm1lc3NhZ2UgPSBcItCg0L7QsdC+0YLQsNC8INGC0YPRgiDQvdC1INC80LXRgdGC0L4hXCI7XHJcbiAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX2F1dGgoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGZvcm0gPSAkKCcjYXV0aCcpLFxyXG4gICAgICByZXN1bHQgPSBfdmFsaWRhdGVBdXRoRm9ybSgpO1xyXG5cclxuICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcclxuICAgICAgbG9jYXRpb24uaHJlZiA9ICdhZG1pbi5odG1sJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRoXCIpLnJlc2V0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfZXJyb3JNZXNzYWdlKHJlc3VsdFsnbWVzc2FnZSddKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQ6IGluaXRcclxuICB9XHJcbn0pKCk7XHJcblxyXG52YWxpZGF0ZUZvcm0uaW5pdCgpO1xyXG4iLCJnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgaW5pdCk7XHJcbnZhciBtYXA7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIHZhciBtYXBPcHRpb25zID0ge1xyXG4gICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDU5LjkzNzQ3NSwgMzAuMzUyMjQzKSxcclxuICAgIHpvb206IDE1LFxyXG4gICAgem9vbUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgZGlzYWJsZURvdWJsZUNsaWNrWm9vbTogdHJ1ZSxcclxuICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuICAgIHNjYWxlQ29udHJvbDogZmFsc2UsXHJcbiAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICBwYW5Db250cm9sOiBmYWxzZSxcclxuICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgIG92ZXJ2aWV3TWFwQ29udHJvbDogZmFsc2UsXHJcbiAgICBvdmVydmlld01hcENvbnRyb2xPcHRpb25zOiB7XHJcbiAgICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCxcclxuICAgIHN0eWxlczogW3tcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjNDQ0NDQ0XCJcclxuICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjZjJmMmYyXCJcclxuICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgXCJzYXR1cmF0aW9uXCI6IC0xMDBcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDQ1XHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcclxuICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiNlY2FlNDZcIlxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxyXG4gICAgICB9XVxyXG4gICAgfV0sXHJcbiAgfVxyXG4gIHZhciBtYXBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215bWFwJyk7XHJcbiAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwRWxlbWVudCwgbWFwT3B0aW9ucyk7XHJcbiAgdmFyIGxvY2F0aW9ucyA9IFtdO1xyXG4gIGZvciAoaSA9IDA7IGkgPCBsb2NhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChsb2NhdGlvbnNbaV1bMV0gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgZGVzY3JpcHRpb24gPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uID0gbG9jYXRpb25zW2ldWzFdO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uc1tpXVsyXSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0ZWxlcGhvbmUgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRlbGVwaG9uZSA9IGxvY2F0aW9uc1tpXVsyXTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbnNbaV1bM10gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgZW1haWwgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVtYWlsID0gbG9jYXRpb25zW2ldWzNdO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uc1tpXVs0XSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB3ZWIgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdlYiA9IGxvY2F0aW9uc1tpXVs0XTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbnNbaV1bN10gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgbWFya2VyaWNvbiA9ICcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWFya2VyaWNvbiA9IGxvY2F0aW9uc1tpXVs3XTtcclxuICAgIH1cclxuICAgIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICBpY29uOiBtYXJrZXJpY29uLFxyXG4gICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsb2NhdGlvbnNbaV1bNV0sIGxvY2F0aW9uc1tpXVs2XSksXHJcbiAgICAgIG1hcDogbWFwLFxyXG4gICAgICB0aXRsZTogbG9jYXRpb25zW2ldWzBdLFxyXG4gICAgICBkZXNjOiBkZXNjcmlwdGlvbixcclxuICAgICAgdGVsOiB0ZWxlcGhvbmUsXHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgd2ViOiB3ZWJcclxuICAgIH0pO1xyXG4gICAgbGluayA9ICcnO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
