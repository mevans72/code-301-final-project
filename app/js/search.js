(function (module) {
  module.initSearches = function () {
    $(".search-bar input").autocomplete({
      source: snapData.all.map(function(s){
        return s.Store_Name
      })
    })
      .autocomplete( "instance" )._renderItem = function( ul, item ) {
        return $( "<li>" )
          .append( "<a>" + item.label + "</a>" )
          .appendTo( ul );
      };

    var searchBar = $('.search-bar input')

    searchBar.on('keypress', function(event) {
      if (event.which == 13) {
        var matches = snapData.all.filter(function (store) {
          return store.Store_Name.match(searchBar.val());
        });
        setPlaces(matches);
      }
    });
  };
})(window);
