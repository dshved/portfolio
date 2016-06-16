var myModule = (function () {
  'use strict';

  var init = function () {
    _setUpListners();
    };

  var _setUpListners = function () {
    $('.login-btn').on('click', _showLogin);
    $('.footer').on('click', _showInfo);
    $('.index').on('click', _showInfo);

  };

  var _showLogin = function (e) {
    e.preventDefault();
    $('.welcome__container').toggleClass('flipped');
    $('.login-btn').css({
      'visibility': 'hidden'
    });
  };
 
  var _showInfo = function (e) {
    $('.welcome__container').removeClass('flipped');
    $('.login-btn').css({
      'visibility': 'visible'
    });
  };
  
  return {
    init : init
  }
})();

myModule.init();


  // $(function(){
  //       var x = 0;
  //       setInterval(function(){
  //           x-=1;
  //           $('.wrapper').css('background-position', x + 'px 0');
  //       }, 50);
  //   })

$(document).ready(function(){

  setTimeout(function(){
    $( "#page-preloader" ).fadeOut( "slow" );
    $( ".welcome" ).css('visibility', 'visible');
  }, 3000);
  


  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $('#overlay').toggleClass('open');
  });
  var sidebar = $('.sidebar__inner');
  var top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));

  $(window).scroll(function (event) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm15bWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbXlNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBfc2V0VXBMaXN0bmVycygpO1xyXG4gICAgfTtcclxuXHJcbiAgdmFyIF9zZXRVcExpc3RuZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLmxvZ2luLWJ0bicpLm9uKCdjbGljaycsIF9zaG93TG9naW4pO1xyXG4gICAgJCgnLmZvb3RlcicpLm9uKCdjbGljaycsIF9zaG93SW5mbyk7XHJcbiAgICAkKCcuaW5kZXgnKS5vbignY2xpY2snLCBfc2hvd0luZm8pO1xyXG5cclxuICB9O1xyXG5cclxuICB2YXIgX3Nob3dMb2dpbiA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcud2VsY29tZV9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2ZsaXBwZWQnKTtcclxuICAgICQoJy5sb2dpbi1idG4nKS5jc3Moe1xyXG4gICAgICAndmlzaWJpbGl0eSc6ICdoaWRkZW4nXHJcbiAgICB9KTtcclxuICB9O1xyXG4gXHJcbiAgdmFyIF9zaG93SW5mbyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKCcud2VsY29tZV9fY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ2ZsaXBwZWQnKTtcclxuICAgICQoJy5sb2dpbi1idG4nKS5jc3Moe1xyXG4gICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJ1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBcclxuICByZXR1cm4ge1xyXG4gICAgaW5pdCA6IGluaXRcclxuICB9XHJcbn0pKCk7XHJcblxyXG5teU1vZHVsZS5pbml0KCk7XHJcblxyXG5cclxuICAvLyAkKGZ1bmN0aW9uKCl7XHJcbiAgLy8gICAgICAgdmFyIHggPSAwO1xyXG4gIC8vICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgLy8gICAgICAgICAgIHgtPTE7XHJcbiAgLy8gICAgICAgICAgICQoJy53cmFwcGVyJykuY3NzKCdiYWNrZ3JvdW5kLXBvc2l0aW9uJywgeCArICdweCAwJyk7XHJcbiAgLy8gICAgICAgfSwgNTApO1xyXG4gIC8vICAgfSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICQoIFwiI3BhZ2UtcHJlbG9hZGVyXCIgKS5mYWRlT3V0KCBcInNsb3dcIiApO1xyXG4gICAgJCggXCIud2VsY29tZVwiICkuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuICB9LCAzMDAwKTtcclxuICBcclxuXHJcblxyXG4gICQoJyNuYXYtaWNvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAkKCcjb3ZlcmxheScpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgfSk7XHJcbiAgdmFyIHNpZGViYXIgPSAkKCcuc2lkZWJhcl9faW5uZXInKTtcclxuICB2YXIgdG9wID0gc2lkZWJhci5vZmZzZXQoKS50b3AgLSBwYXJzZUZsb2F0KHNpZGViYXIuY3NzKCdtYXJnaW4tdG9wJykpO1xyXG5cclxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdmFyIHkgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG4gICAgaWYgKHkgPj0gdG9wKSB7XHJcbiAgICAgIHNpZGViYXIuYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaWRlYmFyLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxufSk7IiwiZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCAnbG9hZCcsIGluaXQpO1xyXG52YXIgbWFwO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIHZhciBtYXBPcHRpb25zID0ge1xyXG4gICAgICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1OS45Mzc0NzUsIDMwLjM1MjI0MyksXHJcbiAgICAgICAgem9vbTogMTUsXHJcbiAgICAgICAgem9vbUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgIGRpc2FibGVEb3VibGVDbGlja1pvb206IHRydWUsXHJcbiAgICAgICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgIHNjYWxlQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxyXG4gICAgICAgIHBhbkNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgb3ZlcnZpZXdNYXBDb250cm9sOiBmYWxzZSxcclxuICAgICAgICBvdmVydmlld01hcENvbnRyb2xPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLFxyXG4gICAgICAgIHN0eWxlczogW3tcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM0NDQ0NDRcIlxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmMmYyZjJcIlxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgICAgICAgICBcInNhdHVyYXRpb25cIjogLTEwMFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiA0NVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwiXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLmljb25cIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZWNhZTQ2XCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH1dLFxyXG4gICAgfVxyXG4gICAgdmFyIG1hcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXltYXAnKTtcclxuICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKG1hcEVsZW1lbnQsIG1hcE9wdGlvbnMpO1xyXG4gICAgdmFyIGxvY2F0aW9ucyA9IFtdO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IGxvY2F0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChsb2NhdGlvbnNbaV1bMV0gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSAnJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IGxvY2F0aW9uc1tpXVsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvY2F0aW9uc1tpXVsyXSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0ZWxlcGhvbmUgPSAnJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZWxlcGhvbmUgPSBsb2NhdGlvbnNbaV1bMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb2NhdGlvbnNbaV1bM10gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgZW1haWwgPSAnJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbWFpbCA9IGxvY2F0aW9uc1tpXVszXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvY2F0aW9uc1tpXVs0XSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB3ZWIgPSAnJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3ZWIgPSBsb2NhdGlvbnNbaV1bNF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb2NhdGlvbnNbaV1bN10gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgbWFya2VyaWNvbiA9ICcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1hcmtlcmljb24gPSBsb2NhdGlvbnNbaV1bN107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICBpY29uOiBtYXJrZXJpY29uLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsb2NhdGlvbnNbaV1bNV0sIGxvY2F0aW9uc1tpXVs2XSksXHJcbiAgICAgICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgICAgICB0aXRsZTogbG9jYXRpb25zW2ldWzBdLFxyXG4gICAgICAgICAgICBkZXNjOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgdGVsOiB0ZWxlcGhvbmUsXHJcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgd2ViOiB3ZWJcclxuICAgICAgICB9KTtcclxuICAgICAgICBsaW5rID0gJyc7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
