google.maps.event.addDomListener(window, 'load', function(){
  $(".search-bar input").autocomplete({
    source: snapData.all.map(function(s){
      return s.Store_Name
    })
  });
});
