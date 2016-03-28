// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var pos = {};
var markers = [];

//Initial Map needs to be declared and set before things such as marker or other manipulation takes place. Will need to refactor this in a bad way...
var map = new google.maps.Map(document.getElementById('map'), {
  center: {
    lat: 47.6067,
    lng: -122.3325
  }, //Set a starting location of Seattle Public Library
  zoom: 16
});



function initMap() {
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      // infoWindow.setPosition(pos);
      // infoWindow.setContent('We found you here!');
      map.setCenter(pos);

      var posMarker = new google.maps.Marker({
        position: pos,
        animation: google.maps.Animation.DROP
          // draggable: true,
      });
      posMarker.setMap(map);

    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}



function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}



$(document).ready(function() {
  initMap();
  localData();
  // console.log('SnapData exists? ' + snapData);
  // addAllMarkers();
});
function sortByDistance(myLatitude, myLongitude, world) {
  var distances = []; // This will hold an array of objects. Each object will have two keys: distance, and place. The distance will be the distance of the place from the given latitude and longitude
  // Find the distance from each place in the world
  for (var i = 0; i < world.length; i++) {
    var place = world[i];
    var distance = Math.sqrt(Math.pow(myLatitude - place.Latitude, 2) + Math.pow(myLongitude - place.Longitude, 2)); // Uses Euclidean distance
    distances.push({distance: distance, place: place});
  }
  console.log('test');
  // Return the distances, sorted
  markers = distances.sort(function(a, b) {
    return a.distance - b.distance; // Switch the order of this subtraction to sort the other way
  })
  .slice(0, 10); // Gets the first ten places, according to their distance

  // markers.push(distances);

  // console.log(markers);
  // console.log(distances);
}

function addAllMarkers() {
  console.log('running addAllMarkers function');
  markers.forEach(function(snapLocation) {
    var marker = new google.maps.Marker({
      position: {
        lat: snapLocation.place.Latitude,
        lng: snapLocation.place.Longitude
      },
      clickable: true,
      map: map,
      animation: google.maps.Animation.DROP
    });
    marker.setMap(map);
    // markers.push(marker);
    // console.log('Oh SNAP Latitude: ' + snapLocation.Latitude);
    // console.log('Oh SNAP Longitude: ' + snapLocation.Longitude);
  });
}
