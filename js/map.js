google.maps.event.addDomListener(window, 'load', init);
var map;

$('search_bar').on("change",function(){
  
})
console.log('marcus');
function init() {
  var mapOptions = {
    center: new google.maps.LatLng(47.571893, -122.638551),
    zoom: 11,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.DEFAULT,
    },
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    scaleControl: false,
    scrollwheel: true,
    panControl: true,
    streetViewControl: false,
    draggable: true,
    overviewMapControl: false,
    overviewMapControlOptions: {
      opened: false,
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e9e9e9"
      }, {
        "lightness": 17
      }]
    }, {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{
        "color": "#f5f5f5"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 17
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 29
      }, {
        "weight": 0.2
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 18
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 16
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#f5f5f5"
      }, {
        "lightness": 21
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#dedede"
      }, {
        "lightness": 21
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#ffffff"
      }, {
        "lightness": 16
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "saturation": 36
      }, {
        "color": "#333333"
      }, {
        "lightness": 40
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
        "color": "#f2f2f2"
      }, {
        "lightness": 19
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#fefefe"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#fefefe"
      }, {
        "lightness": 17
      }, {
        "weight": 1.2
      }]
    }],
  }
  var mapElement = document.getElementById('map');
  var map = new google.maps.Map(mapElement, mapOptions);
  // var locations = [
  //   ['Robs Quick Stop', 'undefined', '123-123-123', '123@gmail.com', 'www.123.com', 47.540416, -122.77051640000002, 'https://mapbuildr.com/assets/img/markers/solid-pin-yellow.png']
  // ];
  // for (i = 0; i < locations.length; i++) {
  //   if (locations[i][1] == 'undefined') {
  //     description = '';
  //   } else {
  //     description = locations[i][1];
  //   }
  //   if (locations[i][2] == 'undefined') {
  //     telephone = '';
  //   } else {
  //     telephone = locations[i][2];
  //   }
  //   if (locations[i][3] == 'undefined') {
  //     email = '';
  //   } else {
  //     email = locations[i][3];
  //   }
  //   if (locations[i][4] == 'undefined') {
  //     web = '';
  //   } else {
  //     web = locations[i][4];
  //   }
  //   if (locations[i][7] == 'undefined') {
  //     markericon = '';
  //   } else {
  //     markericon = locations[i][7];
  //   }
  //   // marker = new google.maps.Marker({
  //   //   icon: markericon,
  //   //   position: new google.maps.LatLng(locations[i][5], locations[i][6]),
  //   //   map: map,
  //   //   title: locations[i][0],
  //   //   desc: description,
  //   //   tel: telephone,
  //   //   email: email,
  //   //   web: web
  //   // });
  //   if (web.substring(0, 7) != "http://") {
  //     link = "http://" + web;
  //   } else {
  //     link = web;
  //   }
  //   bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
  // }

  function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
    var infoWindowVisible = (function() {
      var currentlyVisible = false;
      return function(visible) {
        if (visible !== undefined) {
          currentlyVisible = visible;
        }
        return currentlyVisible;
      };
    }());
    iw = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'click', function() {
      if (infoWindowVisible()) {
        iw.close();
        infoWindowVisible(false);
      } else {
        var html = "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>" + title + "</h4><p>" + desc + "<p><p>" + telephone + "<p><a href='mailto:" + email + "' >" + email + "<a><a href='" + link + "'' >" + web + "<a></div>";
        iw = new google.maps.InfoWindow({
          content: html
        });
        iw.open(map, marker);
        infoWindowVisible(true);
      }
    });
    google.maps.event.addListener(iw, 'closeclick', function() {
      infoWindowVisible(false);
    });
  }
}
