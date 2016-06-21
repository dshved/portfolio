var myModule = (function() {
  'use strict';

  var init = function() {
    _setUpListners();
  };

  var _setUpListners = function() {
    $('.login-btn').on('click', _showLogin);
    $('.btn-index').on('click', _showInfo);
    $('.index').on('click', _showInfo);
  };

  var _showLogin = function(e) {
    e.preventDefault();
    $('.flip').toggleClass('flipping');
    $('.login-btn').css({
      'visibility': 'hidden'
    });
  };

  var _showInfo = function(e) {
    $('.flip').removeClass('flipping');
    $('.login-btn').css({
      'visibility': 'visible'
    });
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
    $(this).toggleClass('open');
    $('#overlay').toggleClass('open');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm15bWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBteU1vZHVsZSA9IChmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIHZhciBpbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfc2V0VXBMaXN0bmVycygpO1xyXG4gIH07XHJcblxyXG4gIHZhciBfc2V0VXBMaXN0bmVycyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmxvZ2luLWJ0bicpLm9uKCdjbGljaycsIF9zaG93TG9naW4pO1xyXG4gICAgJCgnLmJ0bi1pbmRleCcpLm9uKCdjbGljaycsIF9zaG93SW5mbyk7XHJcbiAgICAkKCcuaW5kZXgnKS5vbignY2xpY2snLCBfc2hvd0luZm8pO1xyXG4gIH07XHJcblxyXG4gIHZhciBfc2hvd0xvZ2luID0gZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLmZsaXAnKS50b2dnbGVDbGFzcygnZmxpcHBpbmcnKTtcclxuICAgICQoJy5sb2dpbi1idG4nKS5jc3Moe1xyXG4gICAgICAndmlzaWJpbGl0eSc6ICdoaWRkZW4nXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB2YXIgX3Nob3dJbmZvID0gZnVuY3Rpb24oZSkge1xyXG4gICAgJCgnLmZsaXAnKS5yZW1vdmVDbGFzcygnZmxpcHBpbmcnKTtcclxuICAgICQoJy5sb2dpbi1idG4nKS5jc3Moe1xyXG4gICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJ1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQ6IGluaXRcclxuICB9XHJcbn0pKCk7XHJcblxyXG5teU1vZHVsZS5pbml0KCk7XHJcblxyXG4vL9Ch0LzQtdGJ0LXQvdC40LUgYmFja2dyb3VuZFxyXG4vLyAkKGZ1bmN0aW9uKCkge1xyXG4vLyAgIHZhciB4ID0gMDtcclxuLy8gICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuLy8gICAgIHggLT0gMTtcclxuLy8gICAgICQoJy53cmFwcGVyJykuY3NzKCdiYWNrZ3JvdW5kLXBvc2l0aW9uJywgeCArICdweCAwJyk7XHJcbi8vICAgfSwgNTApO1xyXG4vLyB9KVxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gIFxyXG4gIC8v0JzQtdC00LvQtdC90L3Ri9C5INGB0LrRgNC+0LvQu1xyXG4gICQoJ2FbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xyXG4gICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xyXG4gICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArICddJyk7XHJcbiAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIiNwYWdlLXByZWxvYWRlclwiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICQoXCIuYmdcIikuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuICB9LCA0MDAwKTtcclxuXHJcbiAgJCgnLmNvdW50ZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS5wcm9wKCdDb3VudGVyJywgMCkuYW5pbWF0ZSh7XHJcbiAgICAgIENvdW50ZXI6ICQodGhpcykudGV4dCgpXHJcbiAgICB9LCB7XHJcbiAgICAgIGR1cmF0aW9uOiA0MDAwLFxyXG4gICAgICBlYXNpbmc6ICdzd2luZycsXHJcbiAgICAgIHN0ZXA6IGZ1bmN0aW9uKG5vdykge1xyXG4gICAgICAgICQodGhpcykudGV4dChNYXRoLmNlaWwobm93KSArICclJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvL9Cc0LXQvdGOINC90LDQstC40LPQsNGG0LjQuFxyXG4gICQoJyNuYXYtaWNvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgJCgnI292ZXJsYXknKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gIH0pO1xyXG5cclxuICAvL1NpZGViYXIgYmxvZ1xyXG4gIHZhciBzaWRlYmFyID0gJCgnLnNpZGViYXJfX2lubmVyJyk7XHJcbiAgdmFyIHRvcCA9IHNpZGViYXIub2Zmc2V0KCkudG9wIC0gcGFyc2VGbG9hdChzaWRlYmFyLmNzcygnbWFyZ2luLXRvcCcpKTtcclxuXHJcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbihldmVudCkge1xyXG4gICAgdmFyIHkgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG4gICAgaWYgKHkgPj0gdG9wKSB7XHJcbiAgICAgIHNpZGViYXIuYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaWRlYmFyLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcbn0pO1xyXG4iLCJnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgaW5pdCk7XHJcbnZhciBtYXA7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIHZhciBtYXBPcHRpb25zID0ge1xyXG4gICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDU5LjkzNzQ3NSwgMzAuMzUyMjQzKSxcclxuICAgIHpvb206IDE1LFxyXG4gICAgem9vbUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgZGlzYWJsZURvdWJsZUNsaWNrWm9vbTogdHJ1ZSxcclxuICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuICAgIHNjYWxlQ29udHJvbDogZmFsc2UsXHJcbiAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICBwYW5Db250cm9sOiBmYWxzZSxcclxuICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgIG92ZXJ2aWV3TWFwQ29udHJvbDogZmFsc2UsXHJcbiAgICBvdmVydmlld01hcENvbnRyb2xPcHRpb25zOiB7XHJcbiAgICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCxcclxuICAgIHN0eWxlczogW3tcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjNDQ0NDQ0XCJcclxuICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjZjJmMmYyXCJcclxuICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgXCJzYXR1cmF0aW9uXCI6IC0xMDBcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwibGlnaHRuZXNzXCI6IDQ1XHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcclxuICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiNlY2FlNDZcIlxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxyXG4gICAgICB9XVxyXG4gICAgfV0sXHJcbiAgfVxyXG4gIHZhciBtYXBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215bWFwJyk7XHJcbiAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwRWxlbWVudCwgbWFwT3B0aW9ucyk7XHJcbiAgdmFyIGxvY2F0aW9ucyA9IFtdO1xyXG4gIGZvciAoaSA9IDA7IGkgPCBsb2NhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChsb2NhdGlvbnNbaV1bMV0gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgZGVzY3JpcHRpb24gPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uID0gbG9jYXRpb25zW2ldWzFdO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uc1tpXVsyXSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0ZWxlcGhvbmUgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRlbGVwaG9uZSA9IGxvY2F0aW9uc1tpXVsyXTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbnNbaV1bM10gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgZW1haWwgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVtYWlsID0gbG9jYXRpb25zW2ldWzNdO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uc1tpXVs0XSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB3ZWIgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdlYiA9IGxvY2F0aW9uc1tpXVs0XTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbnNbaV1bN10gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgbWFya2VyaWNvbiA9ICcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWFya2VyaWNvbiA9IGxvY2F0aW9uc1tpXVs3XTtcclxuICAgIH1cclxuICAgIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICBpY29uOiBtYXJrZXJpY29uLFxyXG4gICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsb2NhdGlvbnNbaV1bNV0sIGxvY2F0aW9uc1tpXVs2XSksXHJcbiAgICAgIG1hcDogbWFwLFxyXG4gICAgICB0aXRsZTogbG9jYXRpb25zW2ldWzBdLFxyXG4gICAgICBkZXNjOiBkZXNjcmlwdGlvbixcclxuICAgICAgdGVsOiB0ZWxlcGhvbmUsXHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgd2ViOiB3ZWJcclxuICAgIH0pO1xyXG4gICAgbGluayA9ICcnO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
