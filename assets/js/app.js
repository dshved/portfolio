var myModule = (function () {
  'use strict';

  var init = function () {
    _setUpListners();
    };

  var _setUpListners = function () {
    $('.login-btn').on('click', _showLogin);
    $('.btn-index').on('click', _showInfo);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm15bWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG15TW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgX3NldFVwTGlzdG5lcnMoKTtcclxuICAgIH07XHJcblxyXG4gIHZhciBfc2V0VXBMaXN0bmVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5sb2dpbi1idG4nKS5vbignY2xpY2snLCBfc2hvd0xvZ2luKTtcclxuICAgICQoJy5idG4taW5kZXgnKS5vbignY2xpY2snLCBfc2hvd0luZm8pO1xyXG4gICAgJCgnLmluZGV4Jykub24oJ2NsaWNrJywgX3Nob3dJbmZvKTtcclxuXHJcbiAgfTtcclxuXHJcbiAgdmFyIF9zaG93TG9naW4gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLndlbGNvbWVfX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdmbGlwcGVkJyk7XHJcbiAgICAkKCcubG9naW4tYnRuJykuY3NzKHtcclxuICAgICAgJ3Zpc2liaWxpdHknOiAnaGlkZGVuJ1xyXG4gICAgfSk7XHJcbiAgfTtcclxuIFxyXG4gIHZhciBfc2hvd0luZm8gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgJCgnLndlbGNvbWVfX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdmbGlwcGVkJyk7XHJcbiAgICAkKCcubG9naW4tYnRuJykuY3NzKHtcclxuICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZSdcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQgOiBpbml0XHJcbiAgfVxyXG59KSgpO1xyXG5cclxubXlNb2R1bGUuaW5pdCgpO1xyXG5cclxuXHJcbiAgLy8gJChmdW5jdGlvbigpe1xyXG4gIC8vICAgICAgIHZhciB4ID0gMDtcclxuICAvLyAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gIC8vICAgICAgICAgICB4LT0xO1xyXG4gIC8vICAgICAgICAgICAkKCcud3JhcHBlcicpLmNzcygnYmFja2dyb3VuZC1wb3NpdGlvbicsIHggKyAncHggMCcpO1xyXG4gIC8vICAgICAgIH0sIDUwKTtcclxuICAvLyAgIH0pXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAkKCBcIiNwYWdlLXByZWxvYWRlclwiICkuZmFkZU91dCggXCJzbG93XCIgKTtcclxuICAgICQoIFwiLndlbGNvbWVcIiApLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcbiAgfSwgMzAwMCk7XHJcbiAgXHJcbiAgXHJcblxyXG4gICQoJyNuYXYtaWNvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAkKCcjb3ZlcmxheScpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgfSk7XHJcbiAgdmFyIHNpZGViYXIgPSAkKCcuc2lkZWJhcl9faW5uZXInKTtcclxuICB2YXIgdG9wID0gc2lkZWJhci5vZmZzZXQoKS50b3AgLSBwYXJzZUZsb2F0KHNpZGViYXIuY3NzKCdtYXJnaW4tdG9wJykpO1xyXG5cclxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdmFyIHkgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG4gICAgaWYgKHkgPj0gdG9wKSB7XHJcbiAgICAgIHNpZGViYXIuYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaWRlYmFyLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBcclxuICAgIFxyXG59KTsiLCJnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgaW5pdCk7XHJcbnZhciBtYXA7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgdmFyIG1hcE9wdGlvbnMgPSB7XHJcbiAgICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDU5LjkzNzQ3NSwgMzAuMzUyMjQzKSxcclxuICAgICAgICB6b29tOiAxNSxcclxuICAgICAgICB6b29tQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgZGlzYWJsZURvdWJsZUNsaWNrWm9vbTogdHJ1ZSxcclxuICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgc2NhbGVDb250cm9sOiBmYWxzZSxcclxuICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICAgICAgcGFuQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICBvdmVydmlld01hcENvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgIG92ZXJ2aWV3TWFwQ29udHJvbE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgb3BlbmVkOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsXHJcbiAgICAgICAgc3R5bGVzOiBbe1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzQ0NDQ0NFwiXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2YyZjJmMlwiXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgICAgICAgICAgIFwic2F0dXJhdGlvblwiOiAtMTAwXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDQ1XHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNlY2FlNDZcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfV0sXHJcbiAgICB9XHJcbiAgICB2YXIgbWFwRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteW1hcCcpO1xyXG4gICAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwRWxlbWVudCwgbWFwT3B0aW9ucyk7XHJcbiAgICB2YXIgbG9jYXRpb25zID0gW107XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgbG9jYXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGxvY2F0aW9uc1tpXVsxXSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9ICcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gbG9jYXRpb25zW2ldWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG9jYXRpb25zW2ldWzJdID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRlbGVwaG9uZSA9ICcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRlbGVwaG9uZSA9IGxvY2F0aW9uc1tpXVsyXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvY2F0aW9uc1tpXVszXSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBlbWFpbCA9ICcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVtYWlsID0gbG9jYXRpb25zW2ldWzNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG9jYXRpb25zW2ldWzRdID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHdlYiA9ICcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdlYiA9IGxvY2F0aW9uc1tpXVs0XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvY2F0aW9uc1tpXVs3XSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBtYXJrZXJpY29uID0gJyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWFya2VyaWNvbiA9IGxvY2F0aW9uc1tpXVs3XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICAgIGljb246IG1hcmtlcmljb24sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxvY2F0aW9uc1tpXVs1XSwgbG9jYXRpb25zW2ldWzZdKSxcclxuICAgICAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgICAgIHRpdGxlOiBsb2NhdGlvbnNbaV1bMF0sXHJcbiAgICAgICAgICAgIGRlc2M6IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICB0ZWw6IHRlbGVwaG9uZSxcclxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICB3ZWI6IHdlYlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxpbmsgPSAnJztcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
