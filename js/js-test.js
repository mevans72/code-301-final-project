var markers = [];

function sortByDistance(myLatitude, myLongitude, world) {
  var distances = [];
  for (var i = 0; i < world.length; i++) {
    var place = world[i];
    var distance = Math.sqrt(Math.pow(myLatitude - place.Latitude, 2) + Math.pow(myLongitude - place.Longitude, 2)); // Uses Euclidean distance
    distances.push({distance: distance, place: place});
  }
  // Return the distances, sorted
  markers = distances.sort(function(a, b) {
    return a.distance - b.distance; // Switch the order of this subtraction to sort the other way
  })
  .slice(0, 10); // Gets the first ten places, according to their distance
}

function addAllMarkers() {
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
    console.log('Oh SNAP Latitude: ' + snapLocation.place.Latitude);
    console.log('Oh SNAP Longitude: ' + snapLocation.place.Longitude);
  });
}
