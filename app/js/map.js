(function(module) {
  var currentMap, currentMarkers = [];
  var currentLocationMarker;

  function placeMarkerAndPanTo(latLng, map) {
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: "vendor/img/store.svg"
    });
    marker.setVisible(false);
    map.panTo(latLng);
    setPlaces(sortByDistance(latLng.lat(), latLng.lng(), snapData.all), map);
  }

  function markCurrentLocation(cb) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        currentMap.setCenter(pos);
        var posMarker = new google.maps.Marker({
          position: pos,
          icon: "vendor/img/mylocation.svg",
          animation: google.maps.Animation.DROP,
          customInfo: pos
        });
        currentMap.panTo(posMarker.getPosition());
        if(currentLocationMarker){
          currentLocationMarker.setMap(null);
        }
        currentLocationMarker = posMarker;
        posMarker.setMap(currentMap);
        cb(pos);
      }, function() {
        handleLocationError(true, infoWindow, currentMap.getCenter());
      });
    } else {
      handleLocationError(false, infoWindow, currentMap.getCenter());
    }
  };

  function sortByDistance(myLatitude, myLongitude, world) {
    var distances = world.map(function (place) {
      var distance = Math.sqrt(Math.pow(myLatitude - place.Latitude, 2) + Math.pow(myLongitude - place.Longitude, 2)); // Uses Euclidean distance
      return {
        distance: distance,
        place: place
      };
    });

    // Return the distances, sorted
    return distances.sort(function(a, b) {
      return a.distance - b.distance; // Switch the order of this subtraction to sort the other way
    }).slice(0, 30).map(function(dist) {
      return dist.place;
    }); // Gets the first ten places, according to their distance
  }

  function addMarker(place, map, listeners) {
    var marker = new google.maps.Marker({
      position: {
        lat: place.Latitude,
        lng: place.Longitude
      },
      clickable: true,
      map: map,
      icon: "vendor/img/store.svg",
      animation: google.maps.Animation.DROP,
    });

    marker.setMap(map);
    currentMarkers.push(marker);

    Object.keys(listeners).forEach(function(type) {
      google.maps.event.addListener(marker, type, listeners[type]);
    });

    return marker;
  }

  var makeListItem = Handlebars.compile($('#storeListView-template').text());

  function addListItem(place, listeners) {
    $('#slide-bar .text-container').append(makeListItem(place));
    var item = $('#slide-bar .text-container .text-section:last');
    Object.keys(listeners).forEach(function(type) {
      item.on(type, listeners[type]);
    });
    return item;
  }

  function selectItem(item) {
    var container = $('#slide-bar .text-container'),
      pos = item.offset().top - container.offset().top + container.scrollTop();
    container.scrollTop(pos);
  }

  function selectMarker(marker, map) {
    map.panTo(marker.getPosition());
  }

  function selectPlace(item, marker) {
    selectMarker(marker, currentMap);
    selectItem(item);
  }

  function addPlace(place, map) {
    var marker, item;

    var listeners = {
      click: function() {
        if (marker && item) {
          selectPlace(item, marker);
        }
      },
      mouseover: function() {
        item.css('background-color', 'rgb(45, 45, 45)');
        item.find('h4').css('color', 'white');
      },

      mouseout: function() {
        item.css('background-color', 'white');
        item.find('h4').css('color', 'rgb(45, 45, 45)');
      }
    };

    item = addListItem(place, listeners);
    marker = addMarker(place, map, listeners);
  }

  function setPlaces(places) {
    $('#slide-bar').find('.text-container').empty();
    clearCurrentMarkers();
    places.forEach(function(p) {
      addPlace(p, currentMap);
    });
  }

  function clearCurrentMarkers() {
    currentMarkers.forEach(function(m) {
      m.setMap(null);
    });
    currentMarkers = [];
  }

  function init() {
    $('#get-my-location-button').on('click', function(){
      markCurrentLocation(function(){});
    });
    var mapOptions = makeMapOptions();

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    }

    var mapElement = document.getElementById('map');
    currentMap = new google.maps.Map(mapElement, mapOptions);
    // COMMENT: Looking to add a event listener to the map to potentially pan to and redraw new markers
    currentMap.addListener('click', function(e) {
      placeMarkerAndPanTo(e.latLng, currentMap);
    });

    markCurrentLocation(function(pos) {
      setPlaces(sortByDistance(pos.lat, pos.lng, snapData.all));
    });

    initSearches();
  }

  module.setPlaces = setPlaces;

  $(document).ready(function() {
    initReviews();
    localData(init);
    var getReviewHeight = $(window).height()-136;
    $('#review-bar .review-section').css('height',getReviewHeight+'px');

    //set .text-container height;
    var getStoreHeight = $(window).height()-121;
    $('#slide-bar .text-container').css('height',getStoreHeight+'px');
  });

  function makeMapOptions() {
    return {
      center: new google.maps.LatLng(47.6067, -122.3325),
      zoom: 15,
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
    };
  }
})(window);
