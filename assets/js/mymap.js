//Настрока карты на страницу about
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJteW1hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL9Cd0LDRgdGC0YDQvtC60LAg0LrQsNGA0YLRiyDQvdCwINGB0YLRgNCw0L3QuNGG0YMgYWJvdXRcclxuZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCAnbG9hZCcsIGluaXQpO1xyXG52YXIgbWFwO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICB2YXIgbWFwT3B0aW9ucyA9IHtcclxuICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1OS45Mzc0NzUsIDMwLjM1MjI0MyksXHJcbiAgICB6b29tOiAxNSxcclxuICAgIHpvb21Db250cm9sOiBmYWxzZSxcclxuICAgIGRpc2FibGVEb3VibGVDbGlja1pvb206IHRydWUsXHJcbiAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXHJcbiAgICBzY2FsZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxyXG4gICAgcGFuQ29udHJvbDogZmFsc2UsXHJcbiAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICBvdmVydmlld01hcENvbnRyb2w6IGZhbHNlLFxyXG4gICAgb3ZlcnZpZXdNYXBDb250cm9sT3B0aW9uczoge1xyXG4gICAgICBvcGVuZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsXHJcbiAgICBzdHlsZXM6IFt7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgICBcImNvbG9yXCI6IFwiIzQ0NDQ0NFwiXHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgICBcImNvbG9yXCI6IFwiI2YyZjJmMlwiXHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICB9XVxyXG4gICAgfSwge1xyXG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwic2F0dXJhdGlvblwiOiAtMTAwXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcImxpZ2h0bmVzc1wiOiA0NVxyXG4gICAgICB9XVxyXG4gICAgfSwge1xyXG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwiXHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICB9XVxyXG4gICAgfSwge1xyXG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjZWNhZTQ2XCJcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9uXCJcclxuICAgICAgfV1cclxuICAgIH1dLFxyXG4gIH1cclxuICB2YXIgbWFwRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteW1hcCcpO1xyXG4gIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKG1hcEVsZW1lbnQsIG1hcE9wdGlvbnMpO1xyXG4gIHZhciBsb2NhdGlvbnMgPSBbXTtcclxuICBmb3IgKGkgPSAwOyBpIDwgbG9jYXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAobG9jYXRpb25zW2ldWzFdID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZXNjcmlwdGlvbiA9IGxvY2F0aW9uc1tpXVsxXTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbnNbaV1bMl0gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGVsZXBob25lID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZWxlcGhvbmUgPSBsb2NhdGlvbnNbaV1bMl07XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYXRpb25zW2ldWzNdID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGVtYWlsID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbWFpbCA9IGxvY2F0aW9uc1tpXVszXTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbnNbaV1bNF0gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgd2ViID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3ZWIgPSBsb2NhdGlvbnNbaV1bNF07XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYXRpb25zW2ldWzddID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIG1hcmtlcmljb24gPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1hcmtlcmljb24gPSBsb2NhdGlvbnNbaV1bN107XHJcbiAgICB9XHJcbiAgICBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgaWNvbjogbWFya2VyaWNvbixcclxuICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobG9jYXRpb25zW2ldWzVdLCBsb2NhdGlvbnNbaV1bNl0pLFxyXG4gICAgICBtYXA6IG1hcCxcclxuICAgICAgdGl0bGU6IGxvY2F0aW9uc1tpXVswXSxcclxuICAgICAgZGVzYzogZGVzY3JpcHRpb24sXHJcbiAgICAgIHRlbDogdGVsZXBob25lLFxyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIHdlYjogd2ViXHJcbiAgICB9KTtcclxuICAgIGxpbmsgPSAnJztcclxuICB9XHJcbn1cclxuIl0sImZpbGUiOiJteW1hcC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
