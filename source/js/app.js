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
      username = $("#user_login").val();
      password = $("#user_pass").val();
      $.ajax({
        type: "POST",
        url: "/login",
        data: "name=" + username + "&pass=" + password,
        success: function(html) {
          console.log(data);
        }
      });
    } else {
      alert('Не заполнены все поля!');
    }
  }


  return {
    init: init
  }
})();

validateForm.init();
