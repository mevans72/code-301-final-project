// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var pos = {};

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 47.6067,
      lng: -122.3325
    }, //Set a starting location of Seattle Public Library
    zoom: 16
  });
  // var infoWindow = new google.maps.InfoWindow({map: map});

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

      var marker = new google.maps.Marker({
        position: pos,
        animation: google.maps.Animation.DROP
          // draggable: true,
      });
      marker.setMap(map);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  function addAllMarkers() {
    console.log('running addAllMarkers function');
    snapData.forEach(function(snapLocation) {
      // var marker = new google.maps.Marker({
      //   position: {
      //     lat: snapLocation.Latitude,
      //     lng: snapLocation.Longitude
      //   },
      //   clickable: true,
      //   map: map,
      //   animation: google.maps.Animation.DROP
      // });
      // marker.setMap(map);
      console.log('Oh SNAP Latitude: ' + snapLocation.Latitude);
      console.log('Oh SNAP Longitude: ' + snapLocation.Longitude);
    });
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
  console.log('SnapData exists? ' + snapData);
  // addAllMarkers();
});




////Looking at options below...TEST/Garbage Code below...
function addAllMarkers() {
  console.log('running addAllMarkers function');
  snapData.forEach(function(snapLocation) {
    var marker = new google.maps.Marker({
      position: {
        lat: snapLocation.Latitude,
        lng: snapLocation.Longitude
      },
      clickable: true,
      map: map,
      animation: google.maps.Animation.DROP
    });


    // google.maps.event.addListener(marker, 'click', function() {
    //   var infowindow = new google.maps.InfoWindow();
    //   var infolist = jQuery('<ul></ul>');
    //   for (Store_Name in snapLocation) {
    //     infolist.append('<li><b>' + Store_Name + '</b>: ' + snapLocation[Store_Name] + '</li>');
    //   }
    //   infowindow.setContent('<div class="infowindow">' + infolist.html() + '</div>');
    //   infowindow.open(map, marker);
    //   map.panTo(marker.getPosition());
    // });
  });
}

function ClosestLocation(Latitude, Longitude, title) {
  // Create a Google coordinate object for where to center the map
  // var latlng = new google.maps.LatLng(Latitude, Longitude);

  // Map options for how to display the Google map
  // var mapOptions = {
  //   zoom: 12,
  //   center: latlng
  // };

  // Show the Google map in the div with the attribute id 'map'.
  // map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // Place a Google Marker at the same location as the map center
  // When you hover over the marker, it will display the title
  // var marker = new google.maps.Marker({
  //   position: latlng,
  //   map: map,
  //   title: title
  // });

  // Create an InfoWindow for the marker
  // var contentString = "<b>" + title + "</b>"; // HTML text to display in the InfoWindow
  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // Set event to display the InfoWindow anchored to the marker when the marker is clicked.
  // google.maps.event.addListener(marker, 'click', function() {
  //   infowindow.open(map, marker);
  // });

  // find the closest location to the user's location
  var closest = 0;
  var mindist = 99999;

  for (var i = 0; i < snapData.length; i++) {
    // get the distance between user's location and this point
    var dist = Haversine(snapData[i].Latitude, snapData[i].Longitude, Latitude, Longitude);

    // check if this is the shortest distance so far
    if (dist < mindist) {
      closest = i;
      mindist = dist;
    }
  }

  // Create a Google coordinate object for the closest location
  var latlng = new google.maps.LatLng(snapData[closest].Latitude, snapData[closest].Longitude);
  // Place a Google Marker at the closest location as the map center
  // When you hover over the marker, it will display the title
  var marker2 = new google.maps.Marker({
    position: latlng,
    map: map,
    title: "Closest Location to User: Distance is " + mindist + " km"
  });

  // Create an InfoWindow for the marker
  var contentString = "<b>" + "Closest Location to User: Distance is " + mindist + " km" + "</b>"; // HTML text to display in the InfoWindow
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  // Set event to display the InfoWindow anchored to the marker when the marker is clicked.
  google.maps.event.addListener(marker2, 'click', function() {
    infowindow.open(map, marker2);
  });

  map.setCenter(latlng);
}
// Convert Degress to Radians
function Deg2Rad(deg) {
  return deg * Math.PI / 180;
}

// Get Distance between two lat/lng points using the Haversine function
// First published by Roger Sinnott in Sky & Telescope magazine in 1984 (“Virtues of the Haversine”)
//
function Haversine(lat1, lon1, lat2, lon2) {
  var R = 6372.8; // Earth Radius in Kilometers

  var dLat = Deg2Rad(lat2 - lat1);
  var dLon = Deg2Rad(lon2 - lon1);

  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(Deg2Rad(lat1)) * Math.cos(Deg2Rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;

  // Return Distance in Kilometers
  return d;
}

// Get Distance between two lat/lng points using the Pythagoras Theorem on a Equirectangular projection to account
// for curvature of the longitude lines.
function PythagorasEquirectangular(lat1, lon1, lat2, lon2) {
  lat1 = Deg2Rad(lat1);
  lat2 = Deg2Rad(lat2);
  lon1 = Deg2Rad(lon1);
  lon2 = Deg2Rad(lon2);
  var R = 6371; // km
  var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
  var y = (lat2 - lat1);
  var d = Math.sqrt(x * x + y * y) * R;
  return d;
}
